"use client";
import { CustomBtnProps } from "@/types";
import React from "react";
import Image from "next/image";

const CustomBtn = ({
  title,
  btnStyles,
  handleClick,
  btnType,
  rightIcon,
}: CustomBtnProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${btnStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
