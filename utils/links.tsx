import { AreaChart, Layers, LayoutList, UserRound } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/add-job",
    label: "add job",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "all jobs",
    icon: <LayoutList />,
  },
  {
    href: "/stats",
    label: "stats",
    icon: <AreaChart />,
  },
  {
    href: "/user",
    label: "user",
    icon: <UserRound />,
  },
];

export default links;
