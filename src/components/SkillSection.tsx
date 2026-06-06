import { SkillsData } from "../data/SkillsData";

export default function SkillSection() {
  return (
    <div className="container max-w-7xl">
      <div className="flex items-center gap-5 mb-5">
        <div className="SectionDivider"></div>
        <h2 className="text-center SectionHeader">Skills</h2>
        <div className="SectionDivider"></div>
      </div>
      <ul className="flex flex-wrap gap-2 justify-center py-5">
        {SkillsData.map((Skill) => (
          <li
            key={Skill.name}
            className="bg-gray-700 text-white px-4 py-2 shadow-xl rounded-lg flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            {Skill.icon}
            {Skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
