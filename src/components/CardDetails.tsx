"use client";
import Image from "next/image";
import { CarProps } from "@/types";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { getCarImage } from "@/utils";

type CarDetailsProps = {
  isOpen: boolean;
  closeMenu: () => void;
  car: CarProps;
};

const CardDetails = ({ isOpen, closeMenu, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeMenu} className={"relative z-10"}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200 scale-100"
                leaveFrom="opacity-100 scale-95"
                leaveTo="opacity-0"
              >
                <Dialog.Panel
                  className={
                    "relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-6"
                  }
                >
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="absolute top-2 right-2 z-10 w-fit p-2 rounded-full bg-primary-blue-100"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={getCarImage(car)}
                        fill
                        priority
                        className="object-contain"
                        alt="car img"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={getCarImage(car, "29")}
                          fill
                          priority
                          className="object-contain"
                          alt="car img"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={getCarImage(car, "22")}
                          fill
                          priority
                          className="object-contain"
                          alt="car img"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={getCarImage(car, "13")}
                          fill
                          priority
                          className="object-contain"
                          alt="car img"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold capitalize text-xl">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, val]) => (
                        <div
                          key={key}
                          className="flex justify-between gap-5 w-full text-right"
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                            {/* {key} */}
                          </h4>
                          <p className="text-slate-600 font-semibold">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardDetails;
