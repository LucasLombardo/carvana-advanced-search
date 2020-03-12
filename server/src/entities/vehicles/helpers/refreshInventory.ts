import fetchModel from "./fetchModel"
import { MODELS } from "./constants"

const refreshInventory = async () => {
    const res = await fetchModel(MODELS[0])
    return res.length
}

export default refreshInventory
