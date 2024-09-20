const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Continent" type defines the queryable fields for every Continent in our data source.
  # "!" indicates that the field is mandatory
  type Continent {
    id:ID!
    name:String!
    countries:[Country]
  }

  type Country{
    id:ID!
    code:String!
    continent: Continent
    languages: [Language]
  }

  type Language{
    id:ID!
    name:String!
    countryIds: [String]
    countries:[Country]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "continents" query returns an array of zero or more Continent (defined above).
  type Query {
    continents:[Continent]
    countries: [Country]
    languages:[Language]
    continent(id: ID!): Continent
    country(id: ID!): Country
    language(id: ID!): Language
  }

  type Mutation{
    addCountry(code:String!):Country!
    addLanguage(name:String!, countryIds:[String]):Language!
  }
  `;

export default typeDefs;
