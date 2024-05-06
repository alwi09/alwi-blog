import Link from "next/link";
import { Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex items-center justify-center gap-3 py-4 md:h-16 flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()}.
        </p>
        <Link
          href={`mailto:${process.env.NEXT_MY_EMAIL}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-6 w-6 items-center justify-center rounded-md hover:bg-muted ring-offset-background transition-colors dark:bg-foreground/45 bg-foreground/5"
        >
          <span className="sr-only">Mail</span>
          <Mail className="inline-block h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
}
