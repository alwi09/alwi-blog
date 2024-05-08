import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export function WhatsappIcon() {
  return (
    <Link
      href={`${siteConfig.links.whatsapp}?text=Hello%20My%20Name%20is%20(your-name),%20I%20am%20from%20(your-location),%20I%20am%20interested%20in%20your%20services`}
      target="_blank"
      rel="noreferrer"
      aria-label="Whatsapp"
      className="abosulte fixed bottom-5 right-5 hover:scale-110 transition-transform"
    >
      <Icons.whatsapp className="h-11 w-11" />
    </Link>
  );
}
