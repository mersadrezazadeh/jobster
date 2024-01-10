import LinksDropdown from "./LinksDropdown";
import SignOut from "./SignOut";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="relative z-[9999] border border-b bg-muted px-4 py-4 shadow-2xl sm:px-16 lg:px-24">
      <div className="container flex items-center justify-between">
        <div>
          <LinksDropdown />
        </div>
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <SignOut />
        </div>
      </div>
    </header>
  );
}

export default Header;
