"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SquareUserRound } from "lucide-react";
import SignOut from "./SignOut";

function UserMenu({ userData }: { userData: any }) {
  const {
    email,
    user_metadata: { fullName },
  } = userData.user;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <SquareUserRound />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-3">
              <li className="whitespace-nowrap text-xs font-semibold text-muted-foreground">
                {fullName}
              </li>
              <li className="whitespace-nowrap text-xs font-semibold text-muted-foreground">
                {email}
              </li>
              <li>
                <SignOut />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default UserMenu;
