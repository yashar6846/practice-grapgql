const { gql } = require("apollo-server");
const typeDefs = gql`
  type MainCard {
    title: String
    auther: String
  }
  type Animal {
    id: ID!
    title: String
    image: String
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
    category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }
`;
module.exports = typeDefs;
