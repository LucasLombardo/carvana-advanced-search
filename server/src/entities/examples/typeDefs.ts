import { gql } from "apollo-server-koa"

export const typeDefs = gql`
    extend type Query {
        example: Example!
    }

    extend type Mutation {
        createExample: Example!
    }

    type Example {
        id: ID!
        title: String!
    }
`
