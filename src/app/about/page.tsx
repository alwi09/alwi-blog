import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About me and my projects",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48  md:min-h-60 md:min-w-60 flex flex-col gap-2">
          <Avatar className="h-48 w-48 md:h-60 md:w-60 hover:border-4 hover:border-solid hover:scale-105 transition-all">
            <AvatarImage
              src="/avatar.png"
              alt={siteConfig.author}
              className="hover:scale-105 transition-all duration-300"
            />
            <AvatarFallback>AW</AvatarFallback>
          </Avatar>
          <h2 className="text-4xl font-serif font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Web Developer
          </p>
        </div>
        <div className="flex w-full min-h-60 md:px-5 md:justify-start md:items-center">
          <div className="w-80 h-fit border-4 border-border lg:w-96 border-rainbow">
            <p className="text-base text-muted-foreground p-2">
              Hi There 🖐️, Thanks for coming by. I wrote my ramblings on tech
              and dev. like about Go, Java and Javascript. 📃
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
