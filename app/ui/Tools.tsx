import technologies from "../lib/toolsdata";
import Link from "next/link";
import Image from "next/image";

export default function Tools() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-10 py-20">
      {technologies.map((technology) => (
        <div key={technology.name} className="flex items-center space-x-4">
          <div>
            <Image
              width={40}
              height={40}
              src={technology.img}
              alt={technology.name}
              className="rounded-md bg-neutral-200 p-0.5"
            />
          </div>
          <div>
            <Link
              href={technology.url}
              className="text-xs font-semibold text-white dark:text-white"
            >
              {technology.name}
            </Link>
            <p className="text-xs text-white dark:text-white">
              {technology.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
