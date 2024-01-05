import * as z from "zod";

export type JobType = {
  updated_at: Date;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = "pending",
  Interview = "interview",
  Declined = "declined",
}

export enum JobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Internship = "internship",
}

export const createAndUpdateJobSchema = z.object({
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
});

export type createAndUpdateJobType = z.infer<typeof createAndUpdateJobSchema>;
