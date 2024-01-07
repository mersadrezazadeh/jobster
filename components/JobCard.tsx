import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { JobType } from "@/utils/types";
import {
  MapPin,
  Briefcase,
  CalendarDays,
  Pencil,
  Ban,
  Speech,
  Hourglass,
} from "lucide-react";
import Link from "next/link";
import DeleteJobButton from "./DeleteJobButton";
import JobInfo from "./JobInfo";

function JobCard({ job }: { job: JobType }) {
  const { id, position, company, location, status, mode, created_at } = job;
  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short",
  }).format(new Date(created_at));

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{position}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-2">
        <JobInfo icon={<Briefcase className="size-4" />} text={mode} />
        <JobInfo icon={<MapPin className="size-4" />} text={location} />
        <JobInfo icon={<CalendarDays className="size-4" />} text={date} />
        <Badge
          variant={
            status === "declined"
              ? "destructive"
              : status === "interview"
                ? "secondary"
                : "default"
          }
          className="w-32 justify-center"
        >
          <JobInfo
            icon={
              status === "declined" ? (
                <Ban className="size-4" />
              ) : status === "interview" ? (
                <Speech className="size-4" />
              ) : (
                <Hourglass className="size-4" />
              )
            }
            text={status}
          />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/id?id=${id}`}>
            <Pencil />
          </Link>
        </Button>
        <DeleteJobButton id={id} />
      </CardFooter>
    </Card>
  );
}

export default JobCard;
