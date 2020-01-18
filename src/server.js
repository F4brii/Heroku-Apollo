import { ApolloServer } from 'apollo-server';
import { connect } from './database/Conecction';

//connection data base
connect();

//Types and Resolvers
import {  typeDefs } from './graphQl/Types';
import { resolvers } from './graphQl/Resolvers'

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
