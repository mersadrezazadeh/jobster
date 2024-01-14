import { readUser } from "@/utils/actions";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";

export const revalidate = 0;

async function Header() {
  const { data: userData, error } = (await readUser()) || {};

  return (
    <header className="relative z-[9999] border border-b bg-muted px-4 py-4 shadow-xl sm:px-16 lg:px-24">
      <div className="container flex items-center justify-between">
        <div>
          <MobileNavigation />
        </div>
        <div className="flex items-center gap-4">
          <UserMenu userData={userData} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
