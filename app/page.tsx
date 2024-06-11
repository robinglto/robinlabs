import About from "./ui/About";
import AboutT from "./ui/AboutT";
import Contact from "./ui/Contact";
import Nav from "./ui/Nav";

export default function Home() {
  return (
    <div className=" max-w-xl py-20 mx-auto md:px-0 px-10">
      <About />
      <Nav />
      <AboutT />
      <Contact />
    </div>
  );
}
