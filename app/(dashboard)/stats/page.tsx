import {
  readApplies,
  readDates,
  readStatus,
  readUserSession,
} from "@/utils/actions";
import MonthlyApplications from "@/components/MonthlyApplications";
import RecentApplies from "@/components/RecentApplies";
import StatsCards from "@/components/StatsCards";
import OverallStatus from "@/components/OverallStatus";
import { redirect } from "next/navigation";

async function StatsPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  const { data: status, error: statusError } = await readStatus();
  const { data: dates, error: datesError } = await readDates();
  const { data: applies, error: appliesError } = await readApplies();

  if (statusError || datesError || appliesError)
    return (
      <div>
        {statusError?.message || datesError?.message || appliesError?.message}
      </div>
    );

  return (
    <main>
      <StatsCards status={status} />
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        <OverallStatus status={status} />
        <RecentApplies applies={applies} />
      </div>
      <MonthlyApplications dates={dates} />
    </main>
  );
}

export default StatsPage;
