import { chunk } from "lodash"
import fetchModel from "./fetchModel"
import { MODELS } from "./constants"
import { EntityManager } from "typeorm" // eslint-disable-line no-unused-vars
import { Vehicle } from "../model"

const refreshChunk = async (modelChunk: number[], db: EntityManager) => {
    const inventory = await Promise.all(modelChunk.map(fetchModel))

    const vehicles = inventory.flat().map(vehicle => {
        let newVehicle = new Vehicle()
        return { ...newVehicle, ...vehicle }
    })

    await db.save(Vehicle, vehicles)
}

const refreshInventory = async (db: EntityManager) => {
    await db.clear(Vehicle)
    console.log(`cleared vehicles, fetching current inventory`)

    const modelChunks = chunk(MODELS, 5).slice(0, 20)

    for (let i = 0; i < modelChunks.length; i++) {
        console.log(`fetching chunk ${i + 1} out of ${modelChunks.length}`)
        try {
            await refreshChunk(modelChunks[i], db)
        } catch (e) {
            console.log(e)
        }
    }

    await db.find(Vehicle).then(res => console.log(res.length))
}

export default refreshInventory
