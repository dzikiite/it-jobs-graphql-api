import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Job {
        id: ID!
        position: String!
        salary_min: Int!
        salary_max: Int!
        company: String!
        city: String!
        technologies: [String!]!
    }

    type Query {
        getAllJobs: [Job!]!
    }

    type Mutation {
        addNewJobs(job: JobInput!): Job!
    }

    input JobInput {
        position: String!
        salary_min: Int!
        salary_max: Int!
        company: String!
        city: String!
        technologies: [String!]!
    }
`;
