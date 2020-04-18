import { gql } from "apollo-server-koa"

export const typeDefs = gql`
    extend type Query {
        vehicle(id: Int!): Vehicle
        vehicles(
            skip: Int = 0
            limit: Int = 10
            minPrice: Int = 0
            maxPrice: Int = 10000000
            minMileage: Int = 0
            maxMileage: Int = 10000000
            minYear: Int = 0
            maxYear: Int = 3000
            minLength: Int = 0
            maxLength: Int = 1000
            minKeys: Int = 0
            maxKeys: Int = 1000
            minDoors: Int = 0
            maxDoors: Int = 1000
            makes: [String!]
            notMakes: [String!]
            models: [String!]
            notModels: [String!]
            driveTypes: [String!]
            tagsContain: String
            bodyTypes: [String!]
            isPurchasePending: Boolean
            sortBy: SortBy
            order: Order = ASC
        ): [Vehicle]!
    }

    extend type Mutation {
        refreshInventory: String!
    }

    enum SortBy {
        addedToCoreInventoryDateTime
        price
        mileage
        year
    }

    enum Order {
        ASC
        DESC
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
        vehicleTags: String
    }
`
