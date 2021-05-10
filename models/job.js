import mongoose from 'mongoose';

const jobSchema = {
  position: String,
  salary_min: Number,
  salary_max: Number,
  company: String,
  city: String,
  technologies: [String]
}

export const Job = mongoose.model("Job", jobSchema);