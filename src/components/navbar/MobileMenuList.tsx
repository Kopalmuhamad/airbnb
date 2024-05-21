import React from "react";
import Toggle from "../ui/Toggle";
import Image from "next/image";
import xIcon from "@/assets/icons/x.svg";
import { useAtom } from "jotai";
import { navMenuToggle } from "@/atom";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileMenuList = () => {
  const [, setMenuOpen] = useAtom(navMenuToggle);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="absolute top-0 right-0 w-full h-screen bg-white lg:hidden"
    >
      <div className="w-full h-[80px] bg-accent-primary">
        <div className="container h-full mx-auto flex items-center justify-end">
          <Toggle onClick={() => setMenuOpen(false)}>
            <Image src={xIcon} alt="close menu" width={18} height={18} />
          </Toggle>
        </div>
      </div>
      <ul className="h-[calc(100vh-80px)] flex items-center justify-start flex-col">
        <li className="w-full py-4 px-4 border border-black border-b-0">
          <Link href={"/"} className="text-base font-medium">
            Home
          </Link>
        </li>
        <li className="w-full py-4 px-4 border border-black border-b-0">
          <Link href={"/"} className="text-base font-medium">
            Login
          </Link>
        </li>
        <li className="w-full py-4 px-4 border border-black">
          <Link href={"/"} className="text-base font-medium">
            Logout
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default MobileMenuList;
