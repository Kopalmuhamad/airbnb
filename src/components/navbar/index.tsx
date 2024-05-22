"use client";

import React, { use, useEffect } from "react";
import Image from "next/image";
import Toggle from "../ui/Toggle";
import NavLogo from "./NavLogo";
import burgerButton from "@/assets/icons/burger_toggle.svg";
import MobileMenuList from "./MobileMenuList";
import { useAtom } from "jotai";
import { scrolled, navMenuToggle } from "@/atom";
import DesktopMenuList from "./DesktopMenuList";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useAtom(navMenuToggle);
  const [isScrolled, setIsScrolled] = useAtom(scrolled);

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
      className={`z-50 w-full h-[80px] fixed top-0 left-0 transition-colors ${
        isScrolled ? "bg-accent-primary" : "bg-white bg-opacity-10 backdrop-blur-sm"
      }`}
    >
      <div className="container h-full mx-auto flex items-center justify-between">
        <div
          className={`p-2 rounded-full ${
            isScrolled ? "bg-white" : "bg-transparent"
          }`}
        >
          <NavLogo />
        </div>
        <Toggle onClick={() => setMenuOpen(true)} responsive>
          <Image src={burgerButton} alt="logo" width={24} height={24} />
        </Toggle>
        {menuOpen && <MobileMenuList />}
        <DesktopMenuList />
      </div>
    </header>
  );
};

export default Navbar;
