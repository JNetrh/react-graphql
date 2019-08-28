// Imports: GraphQL
import { ApolloServer } from 'apollo-server-express';
// Imports: GraphQL TypeDefs & Resolvers
import typeDefs from './types.js';
import resolvers from './resolvers.js';
// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: `http://localhost:3030/graphql`,
    settings: {
      'editor.theme': 'dark'
    }
  }
});
// Exports
export default SERVER;