import { ApolloServer, gql } from 'apollo-server-koa'

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
}

export default new ApolloServer({ typeDefs, resolvers })
