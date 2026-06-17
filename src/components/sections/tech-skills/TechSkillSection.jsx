import { SKILLS_DATA } from "../../static/data";
import SkillRow from "./SkillRow";

const TechSkillsSection = () => {
  const { title, row1, row2 } = SKILLS_DATA;

  return (
    <section id="tech-skills" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center pb-16">
          <h3 className="text-2xl md:text-4xl font-bold">
            {title.text} <span className="text-pink-600">{title.highlight}</span>.
          </h3>
        </header>

        <div className="flex flex-col gap-6 w-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <SkillRow skills={row1} direction="left" rowId="row1" />
          <SkillRow skills={row2} direction="right" rowId="row2" />
        </div>
      </div>
    </section>
  );
};

export default TechSkillsSection;