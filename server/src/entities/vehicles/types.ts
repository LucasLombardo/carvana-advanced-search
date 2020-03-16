import { gql } from "apollo-server-koa"

export const typeDefs = gql`
    extend type Query {
        vehicle(id: Int!): Vehicle
    }

    extend type Mutation {
        refreshInventory: String!
    }

    type Vehicle {
        id: Int!
        make: String!
        model: String!
        price: Int!
        totalPrice: Int!
        lastFetched: String!
        year: Int!
        mileage: Int!
        imageUrl: String!
        transportCost: Int
        trim: String
        isOnDemand: Boolean
        isPurchasePending: Boolean
        daysUntilAvailable: Int
        vehicleInventoryType: Int
        vehicleLockType: Int
        addedToCoreInventoryDateTime: String
        vdpSlug: String
        priceUpdateDate: String
        previousPrice: Int
        totalWriteDown: Int
        locationId: Int
        stockRecallStatusType: Int
        vin: String
        exteriorColor: String
        interiorColor: String
        driveType: String
        mpgCity: Int
        mpgHighway: Int
        fuelDescription: String
        transmission: String
        numberOfKeys: Int
        doors: Int
        seating: String
        bodyType: String
        length: Int
    }
`
