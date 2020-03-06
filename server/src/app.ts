import Koa from 'koa'
import ApolloServer from './apollo'

const app = new Koa()

app.use(ApolloServer.getMiddleware())

app.listen({ port: 4000 }, () =>
    console.log(
        `🚀 Server ready at http://localhost:4000${ApolloServer.graphqlPath}`
    )
)
