import {ApolloClient , InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oxwrch17fx01xtfi4i8uq0/master',
    cache: new InMemoryCache()
})