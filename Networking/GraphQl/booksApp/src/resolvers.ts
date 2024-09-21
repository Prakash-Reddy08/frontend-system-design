const books = [
  {
    id: 1,
    title: "The Awakening",
    publishedYear: 2023,
    authorId: 1234,
  },
  {
    authorId: 12323,
    id: 2,
    title: "City of Glass",
    publishedYear: 2023,
  },
  {
    authorId: 12323,
    id: 4,
    title: "Dark Knight",
    publishedYear: 2023,
  },
];

const authors = [
  {
    id: 1234,
    name: "Kate Chopin",
  },
  {
    id: 12323,
    name: "Paul Auster",
  },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// all the methods inside resolver will contain these parameters
// parent,args,context,info
const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return authors.find((author) => {
        return author.id === parent.authorId;
      });
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      return books.filter((book) => {
        return book.authorId === parent.id;
      });
    },
  },
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

export default resolvers;
