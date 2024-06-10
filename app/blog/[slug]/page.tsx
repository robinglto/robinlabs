import Nav from "@/app/ui/Nav";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <main className=" max-w-3xl py-20 mx-auto md:px-0 px-10">
      <Nav />
      <article className="prose prose-neutral text-sm	">{blog.content}</article>
    </main>
  );
}
