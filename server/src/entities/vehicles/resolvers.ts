import refreshInventory from "./helpers/refreshInventory"
import { Vehicle } from "./model"
import { IContext } from "../../app" // eslint-disable-line no-unused-vars

export const resolvers = {
    Query: {
        vehicle: async (_parent: any, args: IVehicleArgs, ctx: IContext) => {
            return await ctx.db.findOne(Vehicle, args.id)
        },
        vehicles: async (_parent: any, args: IVehiclesArgs, ctx: IContext) => {
            const options = {
                skip: Math.max(args.skip, 0),
                take: Math.max(args.limit, 1),
            }
            return await ctx.db.find(Vehicle, options)
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

interface IVehiclesArgs {
    skip: number
    limit: number
}
