import { Hero, Display } from "@/components";
import { SearchParamsProps } from "@/types";

export default function Home({ searchParams}: SearchParamsProps) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Display searchParams={searchParams} />
    </main>
  );
}
