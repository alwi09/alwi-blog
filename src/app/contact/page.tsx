import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our social media and contact us. 🌐
          </p>
          <hr className="my-6" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-8">
          <Link
            href={`${siteConfig.links.whatsapp}?text=Hello%20My%20Name%20is%20(your-name),%20I%20am%20from%20(your-location),%20I%20am%20interested%20in%20your%20services`}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-20 h-20 md:w-40 md:h-40 px-0 rounded-2xl",
                "bg-foreground/5",
                "dark:bg-foreground/15",
                "hover:scale-110 transition-transform duration-300"
              )}
            >
              <Icons.whatsapp className="h-14 w-14 md:h-28 md:w-28 fill-current dark:text-foreground" />
            </div>
          </Link>
          <Link
            href={`${siteConfig.links.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-20 h-20 md:w-40 md:h-40 px-0 rounded-2xl",
                "bg-foreground/5",
                "dark:bg-foreground/15",
                "hover:scale-110 transition-transform duration-300"
              )}
            >
              <Icons.instagram className="h-14 w-14 md:h-28 md:w-28 fill-current dark:text-foreground" />
            </div>
          </Link>
          <Link
            href={`${siteConfig.links.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-20 h-20 md:w-40 md:h-40 px-0 rounded-2xl",
                "bg-foreground/5",
                "dark:bg-foreground/15",
                "hover:scale-110 transition-transform duration-300"
              )}
            >
              <Icons.github className="h-14 w-14 md:h-28 md:w-28 fill-current dark:text-foreground" />
            </div>
          </Link>
          <Link
            href={`${siteConfig.links.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-20 h-20 md:w-40 md:h-40 px-0 rounded-2xl",
                "bg-foreground/5",
                "dark:bg-foreground/15",
                "hover:scale-110 transition-transform duration-300"
              )}
            >
              <Icons.linkedin className="h-14 w-14 md:h-28 md:w-28 fill-current dark:text-foreground" />
            </div>
          </Link>
          <Link
            href={`mailto:${process.env.NEXT_MY_EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-20 h-20 md:w-40 md:h-40 px-0 rounded-2xl",
                "bg-foreground/5",
                "dark:bg-foreground/15",
                "hover:scale-110 transition-transform duration-300"
              )}
            >
              <Icons.email className="h-14 w-14 md:h-28 md:w-28 fill-current dark:text-foreground" />
            </div>
          </Link>
          <Link
            href={`${siteConfig.links.facebook}`}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-20 h-20 md:w-40 md:h-40 px-0 rounded-2xl",
                "bg-foreground/5",
                "dark:bg-foreground/15",
                "hover:scale-110 transition-transform duration-300"
              )}
            >
              <Icons.facebook className="h-14 w-14 md:h-28 md:w-28 fill-current dark:text-foreground" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
