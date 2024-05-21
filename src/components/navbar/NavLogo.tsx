import React from "react";

import Image from "next/image";
import Link from "next/link";

import navLogo from "@/assets/icons/Vector.svg";

const NavLogo = () => {
  return (
    <Link href={"/"}>
      <Image src={navLogo} alt="logo" width={24} height={24} />
    </Link>
  );
};

export default NavLogo;
