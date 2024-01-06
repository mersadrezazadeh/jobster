import StatsCard from "../StatsCard";

function StatsContainer({
  status,
}: {
  status: { status: "pending" | "declined" | "interview" }[];
}) {
  const pending = status.filter((job) => job.status === "pending").length;
  const declined = status.filter((job) => job.status === "declined").length;
  const interviews = status.filter((job) => job.status === "interview").length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatsCard title="pending jobs" value={pending} />
      <StatsCard title="interviews set" value={interviews} />
      <StatsCard title="jobs declined" value={declined} />
    </div>
  );
}

export default StatsContainer;
