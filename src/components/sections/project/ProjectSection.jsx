import { useState } from "react";
import { PROJECTS_DATA } from "../../static/data";
import ProjectCard from "./ProjectCard";
import ProjectDetailsOffcanvas from "./ProjectDetailsOffcanvas";

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="pb-16 md:pb-24">
            <div className="max-w-5xl mx-auto px-4">
                <header className="text-center pb-12 md:pb-16">
                    <h2 id="projects-title" className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                        Featured <span className="text-amber-600">Works</span>.
                    </h2>
                     <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                        A collection of projects I've built, ranging from user interfaces to complex backend systems.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-6">
                    {PROJECTS_DATA.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onSelect={setSelectedProject} 
                        />
                    ))}
                </div>
            </div>

            <ProjectDetailsOffcanvas 
                project={selectedProject} 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    );
};

export default ProjectSection;