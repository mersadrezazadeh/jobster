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
import { MapPin, Briefcase, CalendarDays, RadioTower } from "lucide-react";
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
      <CardContent>
        <JobInfo icon={<Briefcase className="size-4" />} text={mode} />
        <JobInfo icon={<MapPin className="size-4" />} text={location} />
        <JobInfo icon={<CalendarDays className="size-4" />} text={date} />
        <Badge>
          <JobInfo icon={<RadioTower className="size-4" />} text={status} />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${id}`}>edit</Link>
        </Button>
        <DeleteJobButton />
      </CardFooter>
    </Card>
  );
}

export default JobCard;
