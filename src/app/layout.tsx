import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappIcon } from "@/components/whatsapp-icon";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  icons: {
    icon: {
      url: "./icon.svg",
      type: "image/svg+xml",
      rel: "icon",
    },
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? `${siteConfig.url}`),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: no-preference)", color: "white" },
  ],
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "light",
  interactiveWidget: "overlays-content",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[4rem]">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers>
          <div className="relative flex flex-col min-h-dvh bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <WhatsappIcon />
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
