import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Image from "next/image";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import ConnectMe from "@/components/ConnectMe";
import Link from "next/link";

export default function Home() {
  // const onClick = () => {
  //   alert("click");
  // };
  return (
    <div id="Home" className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col mt-28">
        <div className="flex justify-center gap-20 mx-20">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-semibold">Hello, I am</h2>
            <h1 className="text-4xl font-semibold">Algimantas</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              commodi consequuntur a iure aspernatur adipisci consectetur odio,
              accusantium
            </p>
            <div className="flex gap-4">
              <Link href="#AboutMe">
                <Button
                  text={
                    <>
                      <span className="mr-2">About me</span>
                      <Image
                        src={"./aboutMe.svg"}
                        width={24}
                        height={24}
                        alt="aboutMeIcon"
                      />
                    </>
                  }
                />
              </Link>
              <Link href="#Projects">
                <Button
                  text={
                    <>
                      <span className="mr-2">Projects</span>
                      <Image
                        src={"./projectsEye.svg"}
                        width={24}
                        height={24}
                        alt="projectsEye"
                      />
                    </>
                  }
                  transparent
                />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 z-10">
              <Image
                src={"/mano.png"}
                width={320}
                height={250}
                alt="Self-img"
              />
            </div>
            <div className="w-80 h-80 bg-light-purple rounded-full relative top-12"></div>
          </div>
        </div>
        <div id="AboutMe" className="h-20 w-full bg-dark-background z-20"></div>
        <div className="flex flex-col gap-6 mx-20 mt-10">
          <AboutMe />
          <h2 className="text-light-purple text-center">My skills:</h2>
          <div className="flex gap-4 font-semibold">
            <div className="bg-light-purple p-4">
              <Image
                src={"/web-development.png"}
                width={90}
                height={90}
                alt="web-development-img"
              />
              <h3 className="mt-2">SIMPLE WEB DEVELOPMENT </h3>
              <ul className="list-disc ml-5 mt-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>Javascipt</li>
              </ul>
            </div>
            <div className="bg-gray-400 p-4">
              <Image
                src={"/reactLogo.svg"}
                width={90}
                height={90}
                alt="reactLogo-img"
              />
              <h3 className="mt-2">WEB DEVELOPMENT WITH REACT</h3>
              <ul className="list-disc ml-5 mt-2">
                <li>React with Next.js</li>
                <li>Typescript</li>
                <li>`useContext` for dependency injection</li>
                <li>React Hook Form, Zod resolver</li>
                <li>Other React Hooks (useState, useEffect, custom hooks..)</li>
                <li>Zustand for managing global state</li>
                <li>TanStack Query</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className="bg-gray-400 p-4">
              <Image src={"/node.svg"} width={90} height={90} alt="node-img" />
              <h3 className="mt-2">BACK END WITH NODE.js</h3>
              <ul className="list-disc ml-5 mt-2">
                <li>NoSQL with mongoDB</li>
                <li>PostgreSQL</li>
                <li>Authentication with bcrypt, JWT</li>
                <li>Custom API development</li>
                <li>Integration with third-party APIs</li>
              </ul>
            </div>
          </div>
          <h2 className="text-light-purple text-center">
            The services I offer:
          </h2>
          <div className="flex justify-center gap-4 font-semibold ">
            <div className="flex flex-col gap-2 justify-center items-center text-center w-[21.4rem] h-80 border-2 rounded-xl border-light-purple p-4">
              <Image
                src={"/web-development.png"}
                width={90}
                height={90}
                alt="web-development-img"
              />
              <h3>SIMPLE WEB DEVELOPMENT</h3>
              <p>
                Develop responsive, accessible web pages using HTML, CSS, and
                JavaScript.
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center text-center w-[21.4rem] h-80 border-2 rounded-xl border-gray-400 p-4">
              <Image
                src={"/reactLogo.svg"}
                width={90}
                height={90}
                alt="reactLogo-img"
              />
              <h3>WEB DEVELOPMENT WITH REACT</h3>
              <p>
                Build dynamic web applications with React and Next.js for
                excellent user experience and optimal performance.
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center text-center w-[21.4rem] h-80 border-2 rounded-xl border-gray-400 p-4">
              <Image src={"/node.svg"} width={90} height={90} alt="node-img" />
              <h3>BACK END WITH NODE.js</h3>
              <p>
                Create robust backend services with Node.js, utilizing Express,
                MongoDB database. Some experience with PostgreSQL.
              </p>
            </div>
          </div>
          <div id="Projects" className="my-10">
            <Projects />
          </div>
          <div id="Contact" className="my-10">
            <ConnectMe />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
