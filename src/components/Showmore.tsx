"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CustomBtn } from ".";
import { ShowmoreProps } from "@/types";

export const Showmore = ({ pageNumber, hasNext }: ShowmoreProps) => {
  const router = useRouter();
  const handleNav = () => {
    // calc new limit based on the current page
    const newLimit = (pageNumber + 1) * 10;

    // update the search param
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", `${newLimit}`);
    const newPath = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPath);
  };
  return (
    <div className="w-full flex-center mt-10">
      <CustomBtn
        title="Show more"
        btnStyles="bg-primary-blue text-white rounded-full cursor-pointer"
        handleClick={handleNav}
      />
    </div>
  );
};
