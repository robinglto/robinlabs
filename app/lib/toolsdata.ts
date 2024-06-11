type Technology = {
  name: string;
  type: string;
  img: string;
  url: string;
}[];

const technologies: Technology = [
  {
    name: "HTML",
    type: "language",
    img: "/icons/html.jpeg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    type: "language",
    img: "/icons/css.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "TypeScript (TS)",
    type: "language",
    img: "/icons/typescript.png",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React.js",
    type: "framework",
    img: "/icons/reactjs.jpeg",
    url: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    type: "framework",
    img: "/icons/tailwindcss.webp",
    url: "https://tailwindcss.com/",
  },
  {
    name: "MDX",
    type: "format",
    img: "/icons/mdx.png",
    url: "https://mdxjs.com/",
  },
  {
    name: "Github",
    type: "Tool",
    img: "/icons/github.png",
    url: "https://github.com/",
  },
  {
    name: "MySQL",
    type: "database",
    img: "/icons/mysql.png",
    url: "https://www.mysql.com/",
  },
  {
    name: "SWR",
    type: "library",
    img: "/icons/swr.jpeg",
    url: "https://swr.vercel.app/",
  },
];

export default technologies;
