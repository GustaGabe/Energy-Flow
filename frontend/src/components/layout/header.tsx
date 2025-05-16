"use client"
import { BatteryCharging, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();
    const navLinks = [
        {name: "Dashboard", href: "/"},
        {name: "Tasks", href: "/tasks"},
        {name: "Analytics", href: "/analytics"},
        {name: "Settings", href: "/settings"},
    ]

  return (
    <header className="w-full p-6 border-b flex flex-row justify-between items-center border-neutral-700 mb-6">
        <div className="flex container mx-auto flex-row justify-between items-center gap-6">
        <h1 className="text-xl font-bold flex flex-row items-center gap-2">
        <BatteryCharging className="w-7 h-7 text-green-500" />
        <Link href="/">Energy Flow</Link>
      </h1>
      <nav className="flex flex-row justify-center items-center gap-6">
        {navLinks.map((link) => (
            <Link className={`${pathname === link.href ? "text-white    " : "text-neutral-400"} text-md font-semibold`} href={link.href} key={link.name}>{link.name}</Link>
        ))}
      </nav>
      <button className="flex flex-row items-center gap-2 cursor-pointer bg-green-500 text-white px-4 py-2 rounded-md">
        <User />
        Login
      </button>
        </div>
    </header>
  );
}