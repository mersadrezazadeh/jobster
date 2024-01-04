"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import links from "@/utils/links";
import { Button } from "./ui/button";
import Link from "next/link";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full bg-muted px-8 py-4">
      <Image src={Logo} alt="Jobster Logo" className="mx-auto" />
      <div className="mt-20 flex flex-col gap-y-4">
        {links.map((link) => (
          <Button
            asChild
            variant={pathname === link.href ? "default" : "link"}
            key={link.href}
          >
            <Link href={link.href}>
              {link.icon}
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
