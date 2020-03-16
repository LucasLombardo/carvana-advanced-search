import Koa from "koa"
import ApolloServer from "./apollo"
import { createConnection, EntityManager } from "typeorm" // eslint-disable-line no-unused-vars

const init = async () => {
    const connection = await createConnection({
        type: `mysql`,
        database: `db`,
        url: process.env.DB_URI,
        entities: [`src/entities/**/model.ts`],
        synchronize: true,
    })

    const app = new Koa()

    app.context.db = connection.manager

    app.use(ApolloServer.getMiddleware())

    app.listen({ port: 8100 }, () =>
        console.log(
            `🚀 Server ready at http://localhost:8100${ApolloServer.graphqlPath}`
        )
    )
}

init()

export interface IContext {
    req: any
    request: any
    res: any
    response: any
    app: any
    originalUrl: string
    socket: any
    // custom properties
    db: EntityManager
}
