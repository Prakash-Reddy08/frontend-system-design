// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  # "!" indicates that the field is mandatory
  type Book {
    id:ID!
    title:String!
    publishedYear:Int
    author:Author
  }

  type Author{
    id:ID!
    name:String!
    books:[Book]
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    authors:[Author]
    books: [Book]
  }
`;

export default typeDefs;
