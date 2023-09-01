import React from "react";
import { SearchBar, CustomFilter, CarCard } from ".";
import { fetchCars } from "@/utils";

const Display = async () => {
  const allCars = await fetchCars();
  console.log(allCars);
  const isDataEmpty =
    !allCars || allCars.length === 0 || !Array.isArray(allCars);
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catelogue</h1>
        <p>Explore cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>

      {isDataEmpty ? (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      ) : (
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Display;
