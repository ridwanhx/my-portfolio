import { WORK_EXPERIENCE } from "../../static/data";
import ExperienceCard from "./ExperienceCard";

const WorkExperienceSection = () => {
    return (
        <section id="experience" className="pb-16 md:pb-24">
            <div className="max-w-5xl mx-auto px-4">
                <header className="text-center pb-12 md:pb-16">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Work <span className="text-indigo-600">Experience</span>.
                    </h2>
                </header>

                {/* Card */}
                <div className="flex flex-col gap-6">
                    {WORK_EXPERIENCE.map((experience) => (
                        <ExperienceCard key={experience.id} exp={experience}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperienceSection;