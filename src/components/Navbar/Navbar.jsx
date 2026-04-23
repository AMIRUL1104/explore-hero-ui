import { Link, Button } from "@heroui/react";

function Navbar() {
  return (
    <div>
      {/* Basic */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <p className="font-bold">Explore Hero UI</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/users">Add User</Link>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
}

export default Navbar;
