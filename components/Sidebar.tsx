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
    <aside className="row-span-full hidden h-screen border bg-muted px-8 py-4 shadow-2xl lg:col-span-1 lg:block">
      <Image src={Logo} alt="Jobster Logo" className="mx-auto" />
      <nav className="mt-20 flex flex-col gap-y-4">
        {links.map((link) => (
          <Button
            asChild
            variant={pathname === link.href ? "default" : "outline"}
            key={link.href}
            className="flex justify-start gap-3 px-12 dark:border-muted-foreground"
          >
            <Link href={link.href}>
              {link.icon}
              <span className="text-lg capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
