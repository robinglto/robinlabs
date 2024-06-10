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
    <div>
      {/* <ul className="flex space-x-6 justify-center bottom-10 absolute"> */}
      <ul className="flex space-x-6 left-1/2 transform -translate-x-1/2 bottom-10 absolute">
        <li>
          <Link href="">
            <TwitterLogoIcon className="w-6 h-6" />
          </Link>
        </li>

        <li>
          <Link href="">
            <GitHubLogoIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="">
            <KeyboardIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="">
            <LinkedInLogoIcon className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
