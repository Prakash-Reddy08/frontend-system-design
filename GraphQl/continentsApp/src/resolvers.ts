const continents = [
  {
    id: "1",
    name: "Asia",
  },
  {
    id: "2",
    name: "Europe",
  },
  {
    id: "3",
    name: "Africa",
  },
];

const countries = [
  {
    id: "101",
    code: "IN",
    continentId: "1",
  },
  {
    id: "102",
    code: "FR",
    continentId: "2",
  },
  {
    id: "103",
    code: "NG",
    continentId: "3",
  },
];

const languages = [
  {
    id: "1001",
    name: "Hindi",
    countryIds: ["101"],
  },
  {
    id: "1002",
    name: "English",
    countryIds: ["101", "102", "103"],
  },
  {
    id: "1003",
    name: "French",
    countryIds: ["102"],
  },
  {
    id: "1004",
    name: "Hausa",
    countryIds: ["103"],
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// all the methods inside resolver will contain these parameters
// parent,args,context,info
const resolvers = {
  Continent: {
    countries: (parent) => {
      return countries.filter((country) => {
        return country.continentId === parent.id;
      });
    },
  },
  Country: {
    continent: (parent) =>
      continents.find((continent) => continent.id === parent.continentId),
    languages: (parent) => {
      return languages.filter((language) => {
        return language.countryIds.includes(parent.id);
      });
    },
  },
  Language: {
    countries: (parent) => {
      return countries.filter((country) => {
        return parent.countryIds.includes(country.id);
      });
    },
  },
  Query: {
    continents: () => continents,
    countries: () => countries,
    languages: () => languages,
    continent: (_, { id }) =>
      continents.find((continent) => continent.id === id),
    country: (_, { id }) => countries.find((country) => country.id === id),
    language: (_, { id }) => languages.find((language) => language.id === id),
  },
  Mutation: {
    addCountry: (parent, args) => {
      const newCountry = { ...args, id: (countries.length + 1).toString() };
      countries.push(newCountry);
      return newCountry;
    },
    addLanguage: (parent, args) => {
      const newLanguage = { ...args, id: (languages.length + 1).toString() };
      languages.push(newLanguage);
      return newLanguage;
    },
  },
};

export default resolvers;
