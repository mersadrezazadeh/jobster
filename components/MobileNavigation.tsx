"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import links from "@/utils/links";
import { usePathname } from "next/navigation";

function MobileNavigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="lg:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-4 p-4">
              {links.map((link) => (
                <li key={link.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={link.href}
                      className={`flex gap-2 font-semibold capitalize ${
                        pathname === link.href ? "text-primary" : ""
                      }`}
                    >
                      {link.icon} {link.label}
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MobileNavigation;
