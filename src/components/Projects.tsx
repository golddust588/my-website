import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <div>
      <h1 className="text-light-purple">Featured projects:</h1>
      <p className="mt-2 leading-loose">
        In my relatively short career as a Web Developer, I have already worked
        on a few real-world projects, which are live.
      </p>
      <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-10 font-semibold">
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
            Demo Web app for private cryptocurrency trading and more, without
            sign-ups or limits, prioritizing user privacy and anonymity.
          </p>
          <div className="flex justify-between">
            <Link href="https://coinfusionx-fe.vercel.app/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button text="View live" />
              </a>
            </Link>
            <Link
              href="https://github.com/golddust588/coinfusionxBE"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <Button text="Github Repo" transparent />
              </a>
            </Link>
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
            Cerberai is an AI-driven demo platform providing security and risk
            analysis solutions to safeguard your crypto investments.
          </p>
          <div className="flex justify-between">
            <Link href="https://ceber-fe.vercel.app/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button text="View live" />
              </a>
            </Link>
            <Button text="Github Repo" transparent private />
          </div>
        </div>
        <div className="w-[21.4rem] flex flex-col gap-4 bg-grey-background rounded-lg p-4">
          <div className="flex justify-center items-center h-40 bg-[#0D0617] border-[1px] border-light-purple border-opacity-50 rounded-lg">
            <h1 className="text-light-purple">Algimantas Skara</h1>
          </div>
          <h3 className="text-light-purple">ALGIMANTAS SKARA</h3>
          <p>
            Check out my GitHub repo for my portfolio website and explore my
            complete GitHub repository for more work examples, including forum
            app.
          </p>
          <div className="flex justify-between">
            <Link
              href="https://github.com/golddust588/my-website"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <Button text="Github Repo" />
              </a>
            </Link>
            <Link href="https://github.com/golddust588" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button text="Whole Repository" transparent />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
