const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Tool {
     id:ID!
    name: String!
     quantity: Int!
     experation_date: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
getByToolName: [Tool]
  
  }
`;

const tools = [
    {
        id:Math.ceil(Math.random()*100),
        name:'Hammer',
        quantity:'5',
        experation_date:'12-22-2019'
    },
    {
        id:Math.ceil(Math.random()*100),   
        name:'Saw',
        quantity:'3',
        experation_date:'01-31-2020'
    }
];
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      getByToolName: () => tools,
      
    },
  };
  const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});