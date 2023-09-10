import { Hero, Display } from "@/components";
import { SearchParamsProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: SearchParamsProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    year: searchParams.year || 2020,
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || "",
  });
  // console.log(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Display allCars={allCars} searchParams={searchParams} />
    </main>
  );
}
