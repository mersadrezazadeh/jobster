import UpdateJobForm from "@/components/UpdateJobForm";
import { readSingleJob } from "@/utils/actions";

async function JobDetailsPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data: job, error } = await readSingleJob(
    "33f3ee5b-5be8-4048-9dbc-83b49bd1739b",
  );

  if (error) return <div>{error.message}</div>;

  return (
    <main>
      <UpdateJobForm job={job} />
    </main>
  );
}

export default JobDetailsPage;
