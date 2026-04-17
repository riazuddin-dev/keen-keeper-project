"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const NavItem = () => {
  const pathName = usePathname();

  return (
    <>
      <li>
        <Link
          href="/home"
          className={
            pathName === "/home"
              ? "bg-green-700 text-white px-3 py-1 rounded"
              : ""
          }
        >
          <FaHome /> Home
        </Link>
      </li>

      <li>
        <Link
          href="/timeline"
          className={
            pathName === "/timeline"
              ? "bg-green-700 text-white px-3 py-1 rounded"
              : ""
          }
        >
          <MdOutlineAccessTimeFilled /> Timeline
        </Link>
      </li>

      <li>
        <Link
          href="/stats"
          className={
            pathName === "/stats"
              ? "bg-green-700 text-white px-3 py-1 rounded"
              : ""
          }
        >
          <IoIosStats /> Stats
        </Link>
      </li>
    </>
  );
};

export default NavItem;
