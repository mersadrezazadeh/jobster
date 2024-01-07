import LinksDropdown from "./LinksDropdown";
import SignOut from "./SignOut";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between border border-b bg-muted px-4 py-4 sm:px-16 lg:px-24">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <SignOut />
      </div>
    </header>
  );
}

export default Header;
