import refreshInventory from "./helpers/refreshInventory"
import { Vehicle } from "./model"
import { IContext } from "../../app" // eslint-disable-line no-unused-vars

export const resolvers = {
    Query: {
        vehicle: async (_parent: any, args: IVehicleArgs, ctx: IContext) => {
            const res = await ctx.db.findOne(Vehicle, args.id)
            return res || null
        },
    },
    Mutation: {
        refreshInventory: (_parent: any, _args: any, ctx: any) => {
            refreshInventory(ctx.db)
            return `OK`
        },
    },
}

interface IVehicleArgs {
    id: number
}
