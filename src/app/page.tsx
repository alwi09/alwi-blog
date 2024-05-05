import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section className="container py-6 lg:py-10 min-h-screen w-full flex">
      <div className="flex flex-col gap-4 justify-center w-full items-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Welcome to my blog 🚛
        </h1>
        <p className="text-muted-foreground text-center sm:text-start">
          I build and develop this blog using next.js and mdx file. 📄
        </p>
      </div>
    </section>
  );
}
