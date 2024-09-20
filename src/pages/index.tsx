import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Image from "next/image";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  const onClick = () => {
    alert("click");
  };
  return (
    <div className="flex flex-col min-h-screen">
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
                onClick={onClick}
              />

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
                onClick={onClick}
                transparent
              />
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
        <div className="h-20 w-full bg-dark-background z-20"></div>
        <div className="flex flex-col gap-6 mx-20">
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
          <div>
            <h1 className="text-light-purple">Featured projects:</h1>
            <p className="mt-2 leading-loose">
              In my relatively short career as a Web Developer, I have already
              worked on a few real-world projects, which are live.
            </p>
            <div className="flex justify-center gap-4 mt-4 font-semibold">
              <div className="w-[21.4rem] flex flex-col gap-4 bg-grey-background rounded-lg p-4">
                <div className="flex justify-center items-center h-40 bg-[#0D0617] border-[1px] border-light-purple border-opacity-50 rounded-lg">
                  <Image
                    src={"/flawless.svg"}
                    width={270}
                    height={250}
                    alt="flawless-img"
                  />
                </div>
                <h3 className="text-light-purple">FLAWLESS</h3>
                <p>
                  Demo Web app for private cryptocurrency trading and more,
                  without sign-ups or limits, prioritizing user privacy and
                  anonymity.
                </p>
                <div className="flex justify-between">
                  <Button text="View live" onClick={onClick} />
                  <Button text="Github Repo" onClick={onClick} transparent />
                </div>
              </div>
              <div className="w-[21.4rem] flex flex-col gap-4 bg-grey-background rounded-lg p-4">
                <div className="flex justify-center items-center h-40 bg-[#0D0617] border-[1px] border-light-purple border-opacity-50 rounded-lg">
                  <Image
                    src={"/cerberai.svg"}
                    width={270}
                    height={250}
                    alt="cerberai-img"
                  />
                </div>
                <h3 className="text-light-purple">CERBERAI</h3>
                <p>
                  Cerberai is an AI-driven demo platform providing security and
                  risk analysis solutions to safeguard your crypto investments.
                </p>
                <div className="flex justify-between">
                  <Button text="View live" onClick={onClick} />
                  <Button text="Github Repo" onClick={onClick} transparent />
                </div>
              </div>
              <div className="w-[21.4rem] flex flex-col gap-4 bg-grey-background rounded-lg p-4">
                <div className="flex justify-center items-center h-40 bg-[#0D0617] border-[1px] border-light-purple border-opacity-50 rounded-lg">
                  <h1 className="text-light-purple">Algimantas Skara</h1>
                </div>
                <h3 className="text-light-purple">ALGIMANTAS SKARA</h3>
                <p>
                  Check out my GitHub repo for my portfolio website and explore
                  my complete GitHub repository for more work examples,
                  including forum app.
                </p>
                <div className="flex justify-between">
                  <Button text="Github Repo" onClick={onClick} />
                  <Button
                    text="Whole Repository"
                    onClick={onClick}
                    transparent
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-light-purple">Connect with me:</h2>
            <p className="mt-2 leading-loose">
              Satisfied with me? Please do not hesitate to contact me about a
              web project you have in mind.
            </p>
            <div className="flex gap-4 mt-2">
              <Image
                src={"/linkedIn.svg"}
                width={50}
                height={50}
                alt="linkedIn-img"
              />
              <Image
                src={"/email.svg"}
                width={80}
                height={80}
                alt="email-img"
              />
              <Image
                src={"/instagram.svg"}
                width={56}
                height={56}
                alt="instagram-img"
              />
              <Image
                src={"/github.svg"}
                width={50}
                height={50}
                alt="github-img"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
