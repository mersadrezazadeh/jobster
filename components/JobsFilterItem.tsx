import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "./ui/label";

type JobsFilterItemProps = {
  name: string;
  labelText: string;
  items: string[];
};

function JobsFilterItem({ name, labelText, items }: JobsFilterItemProps) {
  const salaryValues = ["All", "Entry", "Junior", "Mid", "Senior"];

  return (
    <div className="row-start-2">
      <Label htmlFor={name}>{labelText}</Label>
      <Select name={name} defaultValue="All">
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {items.map((value, i) => (
            <SelectItem
              key={value}
              value={name === "job-salary" ? salaryValues[i] : value}
            >
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default JobsFilterItem;
