import Koa from "koa"
import ApolloServer from "./apollo"

const app = new Koa()

app.use(ApolloServer.getMiddleware())

app.listen({ port: 8100 }, () =>
    console.log(
        `🚀 Server ready at http://localhost:8100${ApolloServer.graphqlPath}`
    )
)
