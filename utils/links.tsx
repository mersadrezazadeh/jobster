import { AreaChart, Layers, LayoutList, Settings } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/dashboard",
    label: "dashboard",
    icon: <AreaChart />,
  },
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
    href: "/settings",
    label: "settings",
    icon: <Settings />,
  },
];

export default links;
