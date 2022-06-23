import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oda6ux1u3q01xra2lvcj1k/master',
    cache: new InMemoryCache()
})