import Link from "next/link";
import React from "react";
import Image from "next/image";
import CustomBtn from "./CustomBtn";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="Xu Cars"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomBtn
          title="Sign In"
          btnType="button"
          btnStyles="text-primary-blue rounded-full bg-white min-w-[130px] border-2"
        />
      </nav>
    </header>
  );
};

export default Navbar;
