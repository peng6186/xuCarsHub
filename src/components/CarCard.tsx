"use client";
import { CarProps } from "@/types";
import { useState } from "react";
import Image from "next/image";
import { CardDetails, CustomBtn } from ".";
import { calculateCarRent, getCarImage } from "@/utils";

type CarCardProps = {
  car: CarProps;
};

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-2xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {carRent}
        <span className="self-end text-sm font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3">
        <Image
          src={getCarImage(car)}
          fill
          priority
          className="object-contain"
          alt="car img"
        />
      </div>

      <div className="relative flex w-full mt-2 ">
        <div className="flex w-full justify-between text-gray group-hover:invisible">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-sm">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="tire" />
            <p className="text-sm">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="gas" />
            <p className="text-sm">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomBtn
            title="View More"
            btnStyles="w-full  rounded-full bg-primary-blue py-[16px] text-white text-sm leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CardDetails
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
