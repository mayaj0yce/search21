const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent,args,context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id }).select('__v -password');
                return userData;
            }
            throw new AuthenticationError('log in first');
        },
    },
 
    Mutation: {
addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);
    return { token, user };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });
// this links the user to the login. finds user via email.

    if (!user) {
        throw new AuthenticationError('invalid user request');
    }
    //if NO user found then throw the authentication error 
    //this allows the user to know WHY the error is occurring 
 
    const CorrectPassword = await user.isCorrectPassword(password);

    //checks to see if the password is valid and for the assigned user

    if (!CorrectPassword) {
        throw new AuthenticationError('wrong password');
    }

    const token = signToken(user);
    //assigns the token to user which is specific for schema form 
    return { token, user };
  },
  saveBook: async (parent, { newBook }, context) => {
    if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { savedBooks: newBook }},
            { new: true}
        );
        return updatedUser;
        //allows user to save books to their own profile
    }
    throw new AuthenticationError('log in to use this feature');
    //BUT they MUST be logged in and verified to save 
  },
  removeBook: async (parent, { bookId }, context) => {
    if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { savedBooks: { bookId }}},
            { new: true}
        );
        return updatedUser;
  }
throw new AuthenticationError('log in to use this feature');
},
},
};

module.exports = resolvers;