import About from "./ui/About";
import AboutT from "./ui/AboutT";
import Contact from "./ui/Contact";
import Nav from "./ui/Nav";

export default function Home() {
  return (
    // <div className="flex flex-col justify-center items-center py-20">
    <div className=" max-w-3xl py-20 mx-auto md:px-0 px-10">
      <About />
      <Nav />
      <AboutT />
      <Contact />
    </div>
  );
}
