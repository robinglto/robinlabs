import React from "react";
import Nav from "../ui/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robin - Projects",
  description:
    "A collection of the projects I've worked on, ranging from personal endeavors to professional collaborations.",
};

export default function page() {
  return (
    <div className=" max-w-xl py-20 mx-auto md:px-0 px-10">
      <Nav />
    </div>
  );
}
