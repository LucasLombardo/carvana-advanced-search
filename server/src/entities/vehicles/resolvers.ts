import refreshInventory from "./helpers/refreshInventory"

export const resolvers = {
    Mutation: {
        refreshInventory: async () => {
            const vehicleCount = await refreshInventory()
            return vehicleCount
        },
    },
}
