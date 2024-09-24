import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ConnectMe from "@/components/ConnectMe";

export default function Index() {
  return (
    <div id="Home" className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col mt-28 mx-auto max-w-[1220px]">
        <Home />
        <div id="AboutMe" className="h-20 w-full bg-dark-background z-20"></div>
        <section className="flex flex-col gap-12 mx-20 mt-10">
          <AboutMe />
          <Skills />
          <Services />
          <section id="Projects" className="my-10">
            <Projects />
          </section>
          <section id="Contact" className="my-10">
            <ConnectMe />
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}
