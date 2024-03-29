import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
    uri: `${process.env.REACT_APP_API_BASE_URL}graphql`,
    cache: new InMemoryCache()
});
  