import Link from "next/link";
import { getBlogs } from "./fetchers";
import Nav from "../ui/Nav";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className=" max-w-3xl py-20 mx-auto md:px-0 px-10">
      <Nav />
      {blogs.map((blog, i) => (
        <article key={i} className="py-10">
          <Link href={`/blog/${blog.slug}`}>
            <p className="font-semibold pb-3">{blog.frontmatter.title}</p>
            <p className="leading-normal">{blog.frontmatter.description}</p>
            {/* <p>{blog.frontmatter.author}</p> */}
            <p className="pt-3">{blog.frontmatter.publishDate}</p>
          </Link>
        </article>
      ))}
    </main>
  );
}
