import JobsFilters from "@/components/JobsFilters";
import JobsListLoading from "@/components/JobsListLoading";
import SearchForm from "@/components/SearchForm";

function loading() {
  return (
    <>
      <div className="mb-4 grid grid-cols-[125px,1fr] gap-4">
        <JobsFilters />
        <SearchForm />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <JobsListLoading />
        <JobsListLoading />
        <JobsListLoading />
        <JobsListLoading />
        <JobsListLoading />
        <JobsListLoading />
        <JobsListLoading />
        <JobsListLoading />
        <JobsListLoading />
        <JobsListLoading />
      </div>
    </>
  );
}

export default loading;
