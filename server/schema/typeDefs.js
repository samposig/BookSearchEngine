const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Mutation {
        login(email: String!, password: String!):Auth
        addUser(username: String!, email: String!, password: String!):Auth
        saveBook(bookData: book!):User
        removeBook(bookId: ID!):User

    }
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
      bookId: ID!
      authors: [String]
      description: String
      title: String!
      image: String
      link: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  input book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String 
  }
`;

module.exports = typeDefs;

