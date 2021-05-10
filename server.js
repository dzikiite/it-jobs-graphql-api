import { ApolloServer } from 'apollo-server-express';
import { typeDefs} from './schema/typeDefs.js';
import { resolvers } from './schema/resolvers.js';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const startServer = async () => {
  dotenv.config();
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  
  server.applyMiddleware({ app });
  
  await mongoose.connect(process.env.MONGODB_SERVER, { useNewUrlParser: true, useUnifiedTopology: true });

  app.listen({ port: process.env.PORT }, () => {
    console.log(`Server is ready`);
  })
}

startServer();