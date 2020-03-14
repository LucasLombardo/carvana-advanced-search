import request from "request-promise-native"
import { HEADERS } from "./constants"
import formatVehicle from "./formatVehicle"

const fetchModel = async (modelId: number) => {
    // fetches on page of search results
    const fetchPage = async (n: number) => {
        const data = await request({
            headers: HEADERS,
            uri: `https://apim.carvana.io/search-api/api/v1/search/search`,
            method: `POST`,
            body: JSON.stringify({
                pagination: { page: n },
                filters: {
                    modelIds: [modelId],
                },
                sortBy: `LowestMileage`,
            }),
        })
        return JSON.parse(data)
    }

    // fetches more detailed information on each vehicle
    const fetchVehicleDetails = async (vehicleId: number) => {
        const data = await request({
            headers: HEADERS,
            uri: `https://apim.carvana.io/vehicle-details-api/api/v1/vehicledetails?vehicleId=${vehicleId}`,
            method: `GET`,
            body: null,
        })
        return JSON.parse(data)
    }

    // get page metadata to find total pages
    const firstPage = await fetchPage(1)
    const { vehicles, pagination } = firstPage.inventory
    const pageCount = pagination.totalMatchedPages

    // initialize result with vehicles from first page
    let result = vehicles

    // get inventory from each page
    for (let i = 2; i <= pageCount; i++) {
        const { inventory } = await fetchPage(i)
        result = [...result, ...inventory]
    }

    // get more details for each vehicles
    result = await Promise.all(
        result.map(async (vehicle: any) => {
            const vehicleDetails = await fetchVehicleDetails(vehicle.vehicleId)
            return { ...vehicle, vehicleDetails }
        })
    )

    return result.map(formatVehicle)
}

export default fetchModel
