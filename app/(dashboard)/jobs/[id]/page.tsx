import UpdateJobForm from "@/components/UpdateJobForm";
import { readSingleJob } from "@/utils/actions";

async function JobDetailsPage({ params }: { params: { id: string } }) {
  const { data: job, error } = await readSingleJob(params.id);

  if (error) return <div>{error.message}</div>;

  return (
    <main>
      <UpdateJobForm job={job} />
    </main>
  );
}

export default JobDetailsPage;
