import { makeExecutableSchema } from "apollo-server-koa"
import { merge } from "lodash"

import * as examples from "../entities/examples"

const typeDefs = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`

export default makeExecutableSchema({
    typeDefs: [typeDefs, examples.typeDefs],
    resolvers: merge(examples.resolvers),
})
