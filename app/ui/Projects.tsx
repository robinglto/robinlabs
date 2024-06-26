import Image from "next/image";
import React from "react";
import projects from "../lib/projectjsdata";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="space-y-12">
      {projects.map((project, index) => (
        <Link key={index} href={project.url}>
          <div className="space-y-3 my-6 p-4 md:transition-transform md:duration-200 md:ease-in-out md:transform md:hover:shadow-md md:hover:rounded-xl md:hover:bg-neutral-900/80">
            <p className="text-xl font-bold text-white">{project.title}</p>
            <p className="text-neutral-400 text-xs">{project.description}</p>
            <Image
              src={project.image}
              width={400}
              height={200}
              alt={project.title}
              className="rounded-xl"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
