import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const DesktopMenuList = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block text-black">
      <ul className="flex items-center justify-center gap-x-4">
        <li>
          <Link
            href={""}
            className={`text-base font-semibold ${
              pathname === "/home" ? "text-accent-secondary" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link href={""} className="text-base font-semibold">
            Login
          </Link>
        </li>
        <li>
          <Link href={""} className="text-base font-semibold">
            Register
          </Link>
        </li>
        <li>
          <Link
            href={""}
            className={`text-base font-semibold ${
              pathname === "/profile" ? "text-accent-secondary" : ""
            }`}
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenuList;
