"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { SearchManufacturer } from ".";
import { useRouter } from "next/navigation";
import { log } from "console";

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check whether any field is empy
    if (manufacturer === "" && model === "") {
      alert("Please fill out at least one search area");
      return;
    }
    // update search param
    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParam = new URLSearchParams(window.location.search);

    if (manufacturer) {
      searchParam.set("manufacturer", manufacturer);
    } else {
      searchParam.delete("manufacturer");
    }
    if (model) {
      searchParam.set("model", model);
    } else {
      searchParam.delete("model");
    }
    const newPath = `${window.location.pathname}?${searchParam.toString()}`;
    // console.log(newPath);

    router.push(newPath);
  };
  return (
    <form className="searchbar " onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <div className="searchbar__item self-start">
        <Image
          className="absolute w-[20px] h-[20px] ml-4"
          src={"/model-icon.png"}
          alt="model img"
          width={25}
          height={25}
        />
        <input
          type="text"
          className="searchbar__input"
          value={model}
          name="model"
          placeholder="Q3"
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <button type="submit" className="self-start">
        <Image
          src="/magnifying-glass.svg"
          alt="search icon"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    </form>
  );
};

export default SearchBar;
