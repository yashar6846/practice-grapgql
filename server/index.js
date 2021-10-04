const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema");
const Query = require("./reselvers/Quer");
const Animal = require("./reselvers/Animal");
const Category = require("./reselvers/Category");

const server = new ApolloServer({
  typeDefs,
  reselvers: {
    Query,
    Animal,
    Category,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
