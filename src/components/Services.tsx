import Image from "next/image";
import useActiveSkillStore from "../state/useActiveSkillStore";

export const Services = () => {
  const { activeSkill, setActiveSkill } = useActiveSkillStore();

  return (
    <>
      <h2 className="text-light-purple text-center mt-6">
        The services I offer:
      </h2>
      <div className="flex justify-center gap-4 font-semibold ">
        {/* Service 1 */}
        <div
          className={`flex flex-col gap-2 justify-center items-center text-center w-[21.4rem] h-80 border-2 rounded-xl cursor-pointer ${
            activeSkill === "web-dev"
              ? "border-light-purple"
              : "border-gray-400"
          } p-4`}
          onClick={() => setActiveSkill("web-dev")}
        >
          <Image
            src={"/web-development.png"}
            width={90}
            height={90}
            alt="web-development-img"
          />
          <h3>SIMPLE WEB DEVELOPMENT</h3>
          <p>
            Develop responsive, accessible web pages using HTML, CSS, and
            JavaScript. Always give much detail to fulfill design requirements.
          </p>
        </div>

        {/* Service 2 */}
        <div
          className={`flex flex-col gap-2 justify-center items-center text-center w-[21.4rem] h-80 border-2 rounded-xl cursor-pointer ${
            activeSkill === "react-dev"
              ? "border-light-purple"
              : "border-gray-400"
          } p-4`}
          onClick={() => setActiveSkill("react-dev")}
        >
          <Image
            src={"/reactLogo.svg"}
            width={90}
            height={90}
            alt="reactLogo-img"
          />
          <h3>WEB DEVELOPMENT WITH REACT</h3>
          <p>
            Build dynamic web applications with React and Next.js for excellent
            user experience and optimal performance.
          </p>
        </div>

        {/* Service 3 */}
        <div
          className={`flex flex-col gap-2 justify-center items-center text-center w-[21.4rem] h-80 border-2 rounded-xl cursor-pointer ${
            activeSkill === "node-backend"
              ? "border-light-purple"
              : "border-gray-400"
          } p-4`}
          onClick={() => setActiveSkill("node-backend")}
        >
          <Image src={"/node.svg"} width={90} height={90} alt="node-img" />
          <h3>BACK END WITH NODE.js</h3>
          <p>
            Create robust backend services with Node.js, utilizing Express,
            MongoDB database. Some experience with PostgreSQL.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
