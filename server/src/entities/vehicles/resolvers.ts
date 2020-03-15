import refreshInventory from "./helpers/refreshInventory"

export const resolvers = {
    Mutation: {
        refreshInventory: (_parent: any, _args: any, ctx: any) => {
            refreshInventory(ctx.db)
            return `OK`
        },
    },
}
