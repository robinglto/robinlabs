import React from "react";
import Nav from "../ui/Nav";
import Tools from "../ui/Tools";

export default function page() {
  return (
    <div className=" max-w-xl py-20 mx-auto md:px-0 px-10">
      <Nav />
      <p className="text-sm text-neutral-400">
        A comprehensive list of the resources and utilities I utilize to
        streamline both my professional endeavors and personal affairs.
      </p>
      <Tools />
    </div>
  );
}
