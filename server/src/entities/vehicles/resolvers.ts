import refreshInventory from "./helpers/refreshInventory"
import { Between, Not, In, Like } from "typeorm"
import { Vehicle } from "./model"
import { IContext } from "../../app" // eslint-disable-line no-unused-vars

export const resolvers = {
    Query: {
        vehicle: async (_parent: any, args: IVehicleArgs, ctx: IContext) => {
            return await ctx.db.findOne(Vehicle, args.id)
        },
        vehicles: async (_parent: any, args: IVehiclesArgs, ctx: IContext) => {
            const options: { [key: string]: any } = {
                skip: Math.max(args.skip, 0),
                take: Math.max(args.limit, 1),
                where: {
                    // range filters
                    price: Between(args.minPrice, args.maxPrice),
                    mileage: Between(args.minMileage, args.maxMileage),
                    year: Between(args.minYear, args.maxYear),
                    length: Between(args.minLength, args.maxLength),
                    numberOfKeys: Between(args.minKeys, args.maxKeys),
                    doors: Between(args.minDoors, args.maxDoors),
                },
            }

            // include / exclude filters
            if (args.makes || args.notMakes) {
                options.where.make = args.makes
                    ? In(args.makes)
                    : Not(In(args.notMakes))
            }

            if (args.models || args.notModels) {
                options.where.model = args.models
                    ? In(args.models)
                    : Not(In(args.notModels))
            }

            // include only filters
            if (args.driveTypes) options.where.driveType = In(args.driveTypes)
            if (args.bodyTypes) options.where.bodyType = In(args.bodyTypes)

            if (args.tagsContain) {
                options.where.vehicleTags = Like(`%${args.tagsContain}%`)
            }

            if (args.isPurchasePending !== undefined) {
                options.where.isPurchasePending = args.isPurchasePending || null
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
    minPrice: number
    maxPrice: number
    minMileage: number
    maxMileage: number
    minYear: number
    maxYear: number
    minLength: number
    maxLength: number
    minKeys: number
    maxKeys: number
    minDoors: number
    maxDoors: number
    makes: string[]
    notMakes: string[]
    models: string[]
    notModels: string[]
    driveTypes: string[]
    bodyTypes: string[]
    tagsContain: string
    isPurchasePending: boolean
}
