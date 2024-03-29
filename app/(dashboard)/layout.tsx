import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr] lg:grid-cols-[300px,1fr]">
      <Sidebar />

      <Header />

      <main className="overflow-y-scroll px-2 py-5 sm:px-4 md:px-6 md:py-10">
        <div className="container">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
