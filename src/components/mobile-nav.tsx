"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center gap-2"
        >
          <Icons.logo className="h-4 w-4 fill-current dark:text-foreground" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col justify-between h-1/6">
          <div className="flex flex-col gap-3 mt-10">
            <div className="flex flex-row gap-2 items-center">
              <Icons.note className="h-5 w-5 fill-current dark:text-foreground" />
              <MobileLink
                onOpenChange={setOpen}
                href="/blog"
                className="text-base font-medium"
              >
                Blog
              </MobileLink>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Icons.personCard className="h-5 w-5 fill-current dark:text-foreground" />
              <MobileLink
                onOpenChange={setOpen}
                href="/about"
                className="text-base font-medium"
              >
                About
              </MobileLink>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Icons.contact className="h-5 w-5 fill-current dark:text-foreground" />
              <MobileLink
                onOpenChange={setOpen}
                href="/contact"
                className="text-base font-medium"
              >
                Contact
              </MobileLink>
            </div>
            <hr className="border-border my-4" />
          </div>
          <div className="flex items-center justify-end gap-3">
            <MobileLink
              href={`${siteConfig.links.github}`}
              className="p-[6px] whitespace-nowrap text-sm font-medium rounded-md ring-offset-background transition-colors dark:bg-foreground/15 bg-foreground/5"
              target="_blank"
              onOpenChange={setOpen}
            >
              <Icons.github className="h-7 w-7 fill-current dark:text-foreground" />
            </MobileLink>
            <MobileLink
              href={`${siteConfig.links.facebook}`}
              className="p-[6px] whitespace-nowrap text-sm font-medium rounded-md ring-offset-background transition-colors dark:bg-foreground/15 bg-foreground/5"
              target="_blank"
              onOpenChange={setOpen}
            >
              <Icons.facebook className="h-7 w-7 fill-current dark:text-foreground" />
            </MobileLink>
            <MobileLink
              href={`${siteConfig.links.instagram}`}
              className="p-[6px] whitespace-nowrap text-sm font-medium rounded-md ring-offset-background transition-colors dark:bg-foreground/15 bg-foreground/5"
              target="_blank"
              onOpenChange={setOpen}
            >
              <Icons.instagram className="h-7 w-7 fill-current dark:text-foreground" />
            </MobileLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  target?: string;
}

function MobileLink({
  target,
  href,
  children,
  onOpenChange,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (target === "_blank") {
      onOpenChange?.(false);
      event.preventDefault();
      window.open(href.toString(), "_blank");
    } else {
      router.push(href.toString());
      onOpenChange?.(false);
    }
  }
  return (
    <Link
      href={href}
      onClick={(event) => handleClick(event)}
      className={className}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
}
