import { makeExecutableSchema } from "apollo-server-koa"
import { merge } from "lodash"

import * as examples from "../entities/examples"
import * as vehicles from "../entities/vehicles"
const entities = [examples, vehicles]

const baseTypeDefs = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`

const typeDefs = [baseTypeDefs, ...entities.map(ent => ent.typeDefs)]
const resolvers = merge({}, ...entities.map(ent => ent.resolvers))

export default makeExecutableSchema({ typeDefs, resolvers })
