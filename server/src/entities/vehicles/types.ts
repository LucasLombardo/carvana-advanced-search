import { gql } from "apollo-server-koa"

export const typeDefs = gql`
    extend type Mutation {
        refreshInventory: Int!
    }
`
