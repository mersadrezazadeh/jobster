import * as z from "zod";

export type JobType = {
  id: string;
  created_at: Date;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
  date: Date;
  remote: boolean;
  salary: string;
};

export enum JobStatus {
  Applied = "Applied",
  Interviewed = "Interviewed",
  Accepted = "Accepted",
  Rejected = "Rejected",
  Offered = "Offered",
  Wishlist = "Wishlist",
}

export enum JobMode {
  FullTime = "Full-Time",
  PartTime = "Part-Time",
  Internship = "Internship",
}

export enum JobRemote {
  Yes = "Yes",
  No = "No",
}

export enum JobSalary {
  Entry = "Under 50.000 $",
  Junior = "Between 50.000 and 70.000 $",
  Mid = "Between 70.000 and 100.000 $",
  Senior = "Above 100.000 $",
}

export const CreateAndUpdateJobSchema = z.object({
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
  remote: z.nativeEnum(JobRemote),
  salary: z.nativeEnum(JobSalary),
  date: z.date(),
});

export type CreateAndUpdateJobType = z.infer<typeof CreateAndUpdateJobSchema>;
