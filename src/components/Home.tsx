import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { AttentionSeeker, Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row justify-between gap-20">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-3xl font-semibold">Hello, I am</h2>
          <h1 className="text-4xl font-semibold">Algimantas</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            commodi consequuntur a iure aspernatur adipisci consectetur odio,
            accusantium
          </p>
          <div className="flex gap-4">
            <Link href="#Contact">
              <AttentionSeeker effect={"headShake"}>
                <Button
                  text={
                    <>
                      <span className="mr-2">Hire me</span>
                      <Image
                        src={"./aboutMe.svg"}
                        width={24}
                        height={24}
                        alt="aboutMeIcon"
                      />
                    </>
                  }
                />
              </AttentionSeeker>
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
        <Slide triggerOnce>
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
        </Slide>
      </div>
      <div className="relative h-20 w-full bg-dark-background z-20"></div>
    </>
  );
};

export default Home;
