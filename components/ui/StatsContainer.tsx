import StatsCard from "../StatsCard";

function StatsContainer({
  status,
}: {
  status: {
    status:
      | "Applied"
      | "Interviewed"
      | "Accepted"
      | "Rejected"
      | "Offered"
      | "Wishlist";
  }[];
}) {
  const applied = status.filter((job) => job.status === "Applied").length;
  const interviewed = status.filter(
    (job) => job.status === "Interviewed",
  ).length;
  const accepted = status.filter((job) => job.status === "Accepted").length;
  const rejected = status.filter((job) => job.status === "Rejected").length;
  const offered = status.filter((job) => job.status === "Offered").length;
  const wishlist = status.filter((job) => job.status === "Wishlist").length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatsCard title="Applied" value={applied} />
      <StatsCard title="Interviewed" value={interviewed} />
      <StatsCard title="Accepted" value={accepted} />
      <StatsCard title="Rejected" value={rejected} />
      <StatsCard title="Offered" value={offered} />
      <StatsCard title="Wishlist" value={wishlist} />
    </div>
  );
}

export default StatsContainer;
