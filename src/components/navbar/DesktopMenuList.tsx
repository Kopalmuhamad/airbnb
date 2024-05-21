import Link from "next/link";
import React from "react";

const DesktopMenuList = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center justify-center gap-x-4">
        <li>
          <Link href={""} className="text-base font-medium">Home</Link>
        </li>
        <li>
          <Link href={""} className="text-base font-medium">Login</Link>
        </li>
        <li>
          <Link href={""} className="text-base font-medium">Register</Link>
        </li>
        <li>
          <Link href={""} className="text-base font-medium">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenuList;
