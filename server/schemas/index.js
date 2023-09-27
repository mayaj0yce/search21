//by using schemas instead of routes we can use the Apollo Server
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };
