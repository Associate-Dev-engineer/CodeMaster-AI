import Image from "next/image";
import Link from "next/link";
import logo from "@/public/favicon.ico";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import ActionButton from "./common/Button";
import { ModeToggle as ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="p-3 bg-background border-b border-border sticky-top">
      <nav className="flex justify-between items-center container-medium">
        {/* Logo */}
        <Link href={"/"} className="inline-flex items-center">
          <Image src={logo} alt="CodeMaster AI" height={26} />
          <span className="ml-2 font-bold bg-linear-to-r from-primary to-chart-2 bg-clip-text text-transparent text-sm sm:text-lg">
            CodeMaster AI
          </span>
        </Link>

        {/* Menu Links */}
        <ul className="hidden lg:inline-flex space-x-9 items-center capitalize justify-center">
          <li>
            <Link
              href="/features"
              className="text-foreground text-sm  hover:text-primary transition-colors duration-200"
            >
              features
            </Link>
          </li>
          <li>
            <Link
              href="/problems"
              className="text-foreground text-sm  hover:text-primary transition-colors duration-200"
            >
              Problems
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="text-foreground text-sm hover:text-primary transition-colors duration-200"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-foreground text-sm hover:text-primary transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/docs"
              className="text-foreground text-sm hover:text-primary transition-colors duration-200"
            >
              Docs
            </Link>
          </li>
        </ul>

        {/* User Actions */}
        <div className="hidden md:inline-flex md:items-center md:space-x-2.5">
          <ThemeToggle />
          <ActionButton styles="rounded-full bg-gradient-to-r from-primary to-chart-2 text-primary-foreground px-5 py-2.5 font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            Start Solving
          </ActionButton>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            className="text-foreground text-sm hover:text-primary"
          >
            <Menu />
          </Button>
        </div>
      </nav>
    </header>
  );
}
