"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const route = usePathname();
  return (
    <div>
      <ul className="flex justify-start space-x-4 py-10 text-sm text-white dark:text-white">
        <li>
          <Link
            href="/"
            className={`${
              route === "/" ? "underline underline-offset-[14px] " : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`${
              route !== "/" && route !== "/tools" && route !== "/projects"
                ? "underline underline-offset-[14px]"
                : ""
            }`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/tools"
            className={`${
              route === "/tools" ? "underline underline-offset-[14px]" : ""
            }`}
          >
            Tools
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`${
              route === "/projects" ? "underline underline-offset-[14px]" : ""
            }`}
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
