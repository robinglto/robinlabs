import Link from "next/link";
import { getBlogs } from "./fetchers";
import Nav from "../ui/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robin - Blog",
  description: "A collection of my thoughts",
};

//fix design
export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className=" max-w-xl py-20 mx-auto md:px-0 px-10">
      <Nav />
      {blogs.map((blog, i) => (
        <article key={i} className="py-10">
          <Link href={`/blog/${blog.slug}`}>
            <p className="font-semibold pb-3 text-sm text-white dark:text-white">
              {blog.frontmatter.title}
            </p>
            <p className="leading-normal text-xs text-white dark:text-white">
              {blog.frontmatter.description}
            </p>
            {/* <p>{blog.frontmatter.author}</p> */}
            <p className="pt-3 text-xs text-white dark:text-white">
              {blog.frontmatter.publishDate}
            </p>
          </Link>
        </article>
      ))}
    </main>
  );
}
