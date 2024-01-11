import ApplicationsChart from "@/components/ApplicationsChart";
import StatsCards from "@/components/StatsCards";
import StatusChart from "@/components/StatusChart";
import { readDates, readStatus, readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

async function StatsPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  const { data: status, error: statusError } = await readStatus();
  const { data: dates, error: datesError } = await readDates();

  if (statusError || datesError)
    return <div>{statusError?.message || datesError?.message}</div>;

  return (
    <main>
      <StatsCards status={status} />
      <StatusChart status={status} />
      <ApplicationsChart dates={dates} />
    </main>
  );
}

export default StatsPage;
