import { useLanguage } from "../../../context/LanguageContext";
import ExperienceCard from "./ExperienceCard";

const WorkExperienceSection = () => {
    const { data, locale } = useLanguage();
    const experiences = data.WORK_EXPERIENCE;

    return (
        <section id="experience" className="pb-16 md:pb-24">
            <div className="max-w-5xl mx-auto px-4">
                <header className="text-center pb-12 md:pb-16">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        {locale === "id" ? (
                            <>
                                Pengalaman <span className="text-indigo-600">Kerja</span>.
                            </>
                        ) : (
                            <>
                                Work <span className="text-indigo-600">Experience</span>.
                            </>
                        )}
                    </h2>
                </header>

                <div className="flex flex-col gap-6">
                    {experiences.map((experience) => (
                        <ExperienceCard key={experience.id} exp={experience}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperienceSection;