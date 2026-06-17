import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import TechBadgeList from "./TechBadgeList";

const ProjectDetailsOffcanvas = ({ project, isOpen, onClose }) => {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let renderTimer;
    let animationTimer;

    if (isOpen) {
      setIsRendered(true);
      animationTimer = setTimeout(() => setIsAnimated(true), 50);
    } else {
      setIsAnimated(false);
      renderTimer = setTimeout(() => setIsRendered(false), 300);
    }

    return () => {
      clearTimeout(renderTimer);
      clearTimeout(animationTimer);
    };
  }, [isOpen]);

  if (!isRendered || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="offcanvas-title"
    >
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isAnimated ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${
          isAnimated ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 p-2 text-slate-100 hover:text-slate-600 rounded-full bg-amber-400 transition-colors z-10"
          aria-label="Close details"
        >
          <Icon icon="mdi:close" height="1.5em" />
        </button>
        <div className="flex flex-col">
          <div className="w-full h-64 bg-slate-100 overflow-hidden">
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={`Banner preview for ${project.title}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="p-6">
            <header className="mb-2">
              <h3 id="offcanvas-title" className="text-2xl font-bold tracking-tight text-slate-900">
                {project.title}
              </h3>
            </header>
            
            <section className="mb-8" aria-label="Project description">
              <p className="text-slate-600 leading-relaxed tracking-wide">
                {project.description}
              </p>
            </section>

            <TechBadgeList 
              projectTitle={project.title} 
              technologies={project.technologies} 
              showHeader={true} 
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProjectDetailsOffcanvas;