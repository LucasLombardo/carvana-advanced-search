import request from "request-promise-native"
import formatVehicle from "./formatVehicle"
import { SEARCH_CONFIG } from "./constants"

let pageindex = 1

const fetchModel = async (modelId: number) => {
    // Fetches one page of vehicles, limited to 21 results
    const fetchPage = async (n: number) => {
        console.log(`model: ${modelId}; page ${pageindex}`)
        pageindex++
        const data = await request({
            ...SEARCH_CONFIG,
            body: JSON.stringify({
                pagination: { page: n },
                filters: {
                    modelIds: [modelId],
                },
                // searchContext: { location },
                sortBy: `LowestMileage`,
            }),
        })

        // write to db
        return JSON.parse(data)
    }

    // Get page metadata to find total pages
    const firstPage = await fetchPage(1)
    const { vehicles, pagination } = firstPage.inventory
    const pageCount = pagination.totalMatchedPages

    // Initialize result with vehicles from first page
    let result = vehicles.map(formatVehicle)

    // Fetch each page and merge in the formatted vehicles
    for (let i = 2; i <= pageCount; i++) {
        const { inventory } = await fetchPage(i)

        const formattedVehicles = inventory.vehicles.map(formatVehicle)
        result = [...result, ...formattedVehicles]
    }
    return result
}

export default fetchModel
