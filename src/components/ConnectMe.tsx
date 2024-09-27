import Link from "next/link";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import { useScreen } from "usehooks-ts";
// import Spinner from "./Spinner";

export const ConnectMe = () => {
  const screen = useScreen();
  const [isClient, setIsClient] = useState(false);

  // Ensure this runs only after the component has mounted (on the client)
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or you can return a fallback or skeleton while waiting
  }

  // if (!screen) {
  //   return <Spinner />;
  // }

  return (
    <div
      className={`flex flex-col gap-6 items-center ${
        screen.height > 800 ? "py-40" : ""
      }`}
    >
      <h2 className="text-light-purple">Connect with me:</h2>
      <p className="mt-2 leading-loose text-center">
        Satisfied with me? Please do not hesitate to contact me about a web
        project you have in mind.
      </p>
      <Zoom>
        <div className="flex items-center gap-4 mt-2">
          <Link
            href="https://www.linkedin.com/in/algimantas-skara-3a55a391/"
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedIn.svg"
                width={50}
                height={50}
                alt="linkedIn-img"
              />
            </a>
          </Link>
          <a
            href="mailto:algiomail@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={"/email.svg"} width={80} height={80} alt="email-img" />
          </a>
          <Link href="https://www.instagram.com/algimantas.sk/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={"/instagram.svg"}
                width={56}
                height={56}
                alt="instagram-img"
              />
            </a>
          </Link>
          <Link href="https://github.com/golddust588" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={"/github.svg"}
                width={50}
                height={50}
                alt="github-img"
              />
            </a>
          </Link>
        </div>
      </Zoom>
    </div>
  );
};
export default ConnectMe;
