import UpdateJobForm from "@/components/UpdateJobForm";
import { readSingleJob } from "@/utils/actions";

async function JobDetailsPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data: job, error } = await readSingleJob(searchParams.id);

  if (error) return <div>{error.message}</div>;

  return (
    <main>
      <UpdateJobForm job={job} />
    </main>
  );
}

export default JobDetailsPage;
