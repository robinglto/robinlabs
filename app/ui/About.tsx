import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex space-x-10 items-center">
      <div>
        <Image
          src="/profile.png"
          alt="profile"
          title="profile"
          height={150}
          width={150}
        />
      </div>
      <div className="leading-relaxed">
        <p className="text-2xl">Robin</p>
        <p>Software developer, electronics and welder</p>
      </div>
    </div>
  );
}
