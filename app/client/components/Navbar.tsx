import Image from "next/image";
import Link from "next/link";
import logo from "@/public/favicon.ico";
import Button from "./Button";
import { Menu, SunMedium } from "lucide-react";
import ActionButton from "./Button";

export default function Navbar() {
  return (
    <header className="p-3 container-medium">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="inline-flex items-center">
          <Image src={logo} alt="CodeMaster AI" height={26} />
          <span className="ml-2 font-bold bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent text-sm sm:text-lg">
            CodeMaster AI
          </span>
        </div>
        {/* Menu Links */}
        <ul className="hidden lg:inline-flex space-x-9 items-center capitalize justify-center">
          <li>
            <Link href="/features">features</Link>
          </li>
          <li>
            <Link href="/problems">Problems</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
        </ul>
        {/* User Actions */}
        <div className="hidden md:inline-flex md:items-center md:space-x-2.5">
          <Button variant="ghost">
            <SunMedium size={28} />
          </Button>
          <ActionButton
            styles="rounded-full bg-linear-to-r from-slate-800 to-blue-600 text-white px-5 py-2.5 font-medium
         hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Start Solving
          </ActionButton>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Button variant={"ghost"}>
            <Menu />
          </Button>
        </div>
      </nav>
    </header>
  );
}
