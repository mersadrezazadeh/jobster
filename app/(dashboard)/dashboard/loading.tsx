import MonthlyApplicationsLoading from "@/components/MonthlyApplicationsLoading";
import OverallStatusLoading from "@/components/OverallStatusLoading";
import RecentAppliesLoading from "@/components/RecentAppliesLoading";
import StatsLoadingCard from "@/components/StatsLoadingCard";

function loading() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        <OverallStatusLoading />
        <RecentAppliesLoading />
      </div>
      <MonthlyApplicationsLoading />
    </>
  );
}

export default loading;
