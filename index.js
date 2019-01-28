const { prisma } = require('./generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');

const resolvers = {
  Query: {
    users(root, args, context) {
      return context.prisma.users();
    },
    user(root, args, context) {
      switch (args.type) {
        case 'domain':
          return context.prisma.user({ domain: args.domain });
        case 'address':
          return context.prisma.user({ address: args.address });
        case 'email':
          return context.prisma.user({ address: args.address });
        default:
          return null;
      }
    },
  },
  Mutation: {
    createUser(root, args, context) {
      return context.prisma.createUser({
        domain: args.domain,
        email: args.email,
        address: args.address,
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});
server.start(() => console.log('Server is running'));
