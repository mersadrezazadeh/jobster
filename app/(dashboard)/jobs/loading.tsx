import JobsFilters from "@/components/JobsFilters";
import JobsListLoading from "@/components/JobsListLoading";
import SearchForm from "@/components/SearchForm";

function loading() {
  return (
    <>
      <SearchForm />
      <JobsFilters />
      <div className="grid gap-8 md:grid-cols-2">
        <JobsListLoading />
        <JobsListLoading />
      </div>
    </>
  );
}

export default loading;
