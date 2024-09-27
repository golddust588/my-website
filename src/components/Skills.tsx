import Image from "next/image";
import useActiveSkillStore from "../state/useActiveSkillStore";

export const Skills = () => {
  const { activeSkill, setActiveSkill } = useActiveSkillStore();
  return (
    <>
      <h2 className="text-light-purple text-center mt-6">My skills:</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center font-semibold">
        {/* Skill 1 */}
        <div
          className={`p-4 cursor-pointer ${
            activeSkill === "web-dev" ? "bg-light-purple" : "bg-gray-400"
          }`}
          onClick={() => setActiveSkill("web-dev")}
        >
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

        {/* Skill 2 */}
        <div
          className={`p-4 cursor-pointer ${
            activeSkill === "react-dev" ? "bg-light-purple" : "bg-gray-400"
          }`}
          onClick={() => setActiveSkill("react-dev")}
        >
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

        {/* Skill 3 */}
        <div
          className={`p-4 cursor-pointer ${
            activeSkill === "node-backend" ? "bg-light-purple" : "bg-gray-400"
          }`}
          onClick={() => setActiveSkill("node-backend")}
        >
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
    </>
  );
};

export default Skills;
