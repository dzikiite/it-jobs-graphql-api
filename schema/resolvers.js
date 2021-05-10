import { Job } from '../models/job.js';

export const resolvers = {
    Query: {
        getAllJobs: () => {
            return Job.find();
        },
    },
    Mutation: {
        async addNewJobs(parent, args) {
            const { job } = args;

            const newJob = new Job(job);
            await newJob.save();
            console.log(newJob);
            return newJob;
        },
    },
};
