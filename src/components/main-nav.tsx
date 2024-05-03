"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <div className="p-[5.5px] sm:p-[6px] whitespace-nowrap text-sm font-medium rounded-md ring-offset-background transition-colors dark:bg-foreground/45">
          <Icons.logo className="h-7 w-7" />
        </div>
        <span className="font-bold text-xl">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-base font-medium transition-colors hover:text-primary hidden sm:inline-flex",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-base font-medium transition-colors hover:text-primary hidden sm:inline-flex",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
}
