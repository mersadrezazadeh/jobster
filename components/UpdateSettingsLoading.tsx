import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function UpdateSettingsLoading() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-10 w-[400px]" />
        <Skeleton className="h-10 w-[400px]" />
        <Skeleton className="h-10 w-14 self-end" />
      </CardHeader>
    </Card>
  );
}

export default UpdateSettingsLoading;
