"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Option = {
  title: string;
  value: string;
};

const CustomFilter = ({
  title,
  options,
}: {
  title: string;
  options: Option[];
}) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateSearchParams = ({ value }: Option) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(title, value.toLowerCase());

    const newpath = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newpath);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          console.log(e);

          handleUpdateSearchParams(e);
        }}
      >
        <div className="relative w-fit z-20">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-400"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default CustomFilter;
