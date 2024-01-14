import * as z from "zod";

export type JobType = {
  id: string;
  date: Date;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
  remote: string;
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
  No = "No",
  Yes = "Yes",
}

export enum JobSalary {
  Entry = "Below 50.000$",
  Junior = "50-70.000$",
  Mid = "70-100.000$",
  Senior = "Above 100.000$",
}

// Sign Up
export const SignUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password is required.",
    }),
    confirm: z.string().min(6, {
      message: "Password is required.",
    }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Password did not match",
    path: ["confirm"],
  });

export type SignUpType = z.infer<typeof SignUpSchema>;

// Login
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export type LoginType = z.infer<typeof LoginSchema>;

// Create/Update
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

// Update Account
export const UpdateAccountSchema = z.object({
  fullName: z.string().min(2, {
    message: "full name must be at least 2 characters.",
  }),
});

export type UpdateAccountType = z.infer<typeof UpdateAccountSchema>;

// Update Password
export const UpdatePasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirm: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password did not match",
    path: ["confirm"],
  });

export type UpdatePasswordType = z.infer<typeof UpdatePasswordSchema>;
