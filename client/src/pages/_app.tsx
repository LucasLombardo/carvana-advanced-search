import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import withApollo from "next-with-apollo";

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    link: createHttpLink({
      uri: process.env.GQL_ENDPOINT,
      fetch: fetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(App);
