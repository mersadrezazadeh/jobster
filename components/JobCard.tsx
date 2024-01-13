import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Briefcase,
  CalendarDays,
  Pencil,
  Ban,
  Speech,
  Hourglass,
  Banknote,
  CheckCircle,
  DollarSign,
  Heart,
  RadioTower,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { JobType } from "@/utils/types";
import Link from "next/link";
import DeleteJobButton from "./DeleteJobButton";
import JobInfo from "./JobInfo";

function JobCard({ job }: { job: JobType }) {
  const {
    id,
    position,
    company,
    location,
    status,
    mode,
    remote,
    salary,
    date,
  } = job;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short",
  }).format(new Date(date));

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
        <JobInfo
          icon={<CalendarDays className="size-4" />}
          text={formattedDate}
        />
        <JobInfo
          icon={<Banknote className="size-4" />}
          text={salary.replace("-", ".000 - ").replace("$", " $")}
        />
        <div className="flex gap-2">
          <Badge
            variant={
              (status === "Applied" && "default") ||
              (status === "Rejected" && "destructive") ||
              (status === "Interviewed" && "violet") ||
              (status == "Accepted" && "green") ||
              (status === "Offered" && "orange") ||
              (status === "Wishlist" && "rose") ||
              null
            }
            className="w-32 justify-center"
          >
            <JobInfo
              icon={
                (status === "Applied" && <Hourglass className="size-4" />) ||
                (status === "Rejected" && <Ban className="size-4" />) ||
                (status === "Interviewed" && <Speech className="size-4" />) ||
                (status === "Accepted" && <CheckCircle className="size-4" />) ||
                (status === "Offered" && <DollarSign className="size-4" />) ||
                (status === "Wishlist" && <Heart className="size-4" />)
              }
              text={status}
            />
          </Badge>
          {remote === "Yes" && (
            <Badge variant="yellow" className="w-32 justify-center">
              <JobInfo icon={<RadioTower className="size-4" />} text="Remote" />
            </Badge>
          )}
        </div>
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
