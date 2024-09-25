import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ConnectMe from "@/components/ConnectMe";
import { Fade } from "react-awesome-reveal";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mx-auto max-w-[1220px]">
        <div className="flex flex-col mx-20">
          <section id="Home" className="pt-28">
            <Fade>
              <Home />
            </Fade>
          </section>
          <section id="AboutMe" className="pt-28 pb-16">
            <Fade delay={150}>
              <div className="flex flex-col gap-12">
                <AboutMe />
                <Skills />
                <Services />
              </div>
            </Fade>
          </section>
          <section id="Projects" className="pt-28 pb-16">
            <Fade>
              <Projects />
            </Fade>
          </section>
          <section id="Contact" className="py-96">
            <Fade delay={150}>
              <ConnectMe />
            </Fade>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
