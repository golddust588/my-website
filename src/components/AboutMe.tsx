import Button from "./Button";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <h1 className="text-light-purple">About me:</h1>
      <p className="mt-2 leading-loose">
        Although I hold a master&#39;s degree in International Economics, I
        never found much joy in it. Later, I discovered programming and
        instantly dove deep into it. I enjoy both creating new projects and
        maintaining existing ones, finding great satisfaction in generating
        significant economic value through technology.
      </p>
      <div className="flex items-center gap-4 mt-4">
        <h1 className="text-6xl font-bold text-light-purple">1.5+</h1>
        <p className="text-lg">
          Years of learning and hands-on experience. I specialize in building
          robust applications while ensuring a seamless and engaging web
          experience for end users.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <a href="/Algimantas Skara CV.pdf" download>
          <Button
            text={
              <>
                <span className="mr-2">Download CV</span>
                <Image
                  src={"./download.svg"}
                  width={24}
                  height={24}
                  alt="downloadIcon"
                />
              </>
            }
          />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
