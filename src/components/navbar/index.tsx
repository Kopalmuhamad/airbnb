"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoIcon from "../../../public/Vector.svg";
import Burger_icon from "../../../public/burger_toggle.svg";
import X_icon from "../../../public/x_icon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <header
      className={`w-full h-[80px] fixed top-0 left-0 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-2 sm:px-0 ">
        <Link
          href={"/"}
          className="p-3 flex items-center justify-center w-fit rounded-full bg-white"
        >
          <Image src={LogoIcon} alt="Logo Icon" width={24} height={24} />
        </Link>
        <button
          className="p-3 flex items-center justify-center w-fit bg-white rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <Image src={Burger_icon} alt="Burger Icon" width={24} height={24} />
        </button>
        {isOpen && (
          <nav className="absolute top-0 right-0 w-full h-screen text-black">
            <div className="w-full h-[80px] bg-primary">
              <div className="container mx-auto h-full flex items-center justify-end px-2 ">
                <button onClick={() => setIsOpen(false)}>
                  <Image src={X_icon} alt="X Icon" width={18} height={18} />
                </button>
              </div>
            </div>
            <ul className="flex flex-col items-center justify-start h-[calc(100vh-80px)] bg-white">
              <li className="w-full h-[calc(100%/8)] flex items-center justify-center text-center border border-b-0 border-black">
                <Link href={"/"} className="text-base font-bold">
                  Home
                </Link>
              </li>
              <li className="w-full h-[calc(100%/8)] flex items-center justify-center text-center border border-b-0 border-black">
                <Link href={"/"} className="text-base font-bold">
                  Become A Host
                </Link>
              </li>
              <li className="w-full h-[calc(100%/8)] flex items-center justify-center text-center border border-b-0 border-black">
                <Link href={"/"} className="text-base font-bold">
                  Log In
                </Link>
              </li>
              <li className="w-full h-[calc(100%/8)] flex items-center justify-center text-center border border-black">
                <Link href={"/"} className="text-base font-bold">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
