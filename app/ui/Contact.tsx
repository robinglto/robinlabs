import {
  GitHubLogoIcon,
  KeyboardIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
      <ul className="flex  bg-neutral-800 border border-neutral-700 py-1.5 px-4 rounded-full w-44 h-10 justify-between items-center">
        <li>
          <Link href="https://x.com/robinme_">
            <TwitterLogoIcon className="w-6 h-6 text-white hover:text-blue-500 transition-colors" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/robinglto">
            <GitHubLogoIcon className="w-6 h-6 text-white hover:text-emerald-500 transition-colors" />
          </Link>
        </li>
        <li>
          <Link href="https://robinlabs.vercel.app/blog">
            <KeyboardIcon className="w-6 h-6 text-white hover:text-orange-500 transition-colors" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/sauldev/">
            <LinkedInLogoIcon className="w-6 h-6 text-white hover:text-blue-700 transition-colors" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
