interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Weather App",
    description: `
        My weather application offers user-friendly information on current
        weather and future forecasts, featuring a modern interface and
        functionalities like dark mode for an optimal user experience.
      `,
    image: "/projects/weather/dark.png",
    url: "https://weatherglto.vercel.app/",
  },
  {
    title: "Learn",
    description: `Learn is a website housing my personal notes on fundamental concepts of electricity and robotics. It is currently under development.`,
    image: "/projects/learn/dark.png",
    url: "https://learnglto.vercel.app/",
  },
  {
    title: "Robin",
    description: `
        Robin is a personal website that showcases my projects, blog posts, and
        other content. It is built with Next.js, Tailwind CSS, and MDX.
      `,
    image: "/projects/portafolio-v0/dark.png",
    url: "https://robinlabs-v0.vercel.app/",
  },
];

export default projects;
