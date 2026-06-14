import TechBadgeList from "./TechBadgeList";

const ProjectCard = ({ project, onSelect }) => {
  return (
    <article 
      onClick={() => onSelect(project)}
      className="w-full min-h-96 bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100 cursor-pointer hover:shadow-md transition-shadow group focus-within:ring-2 focus-within:ring-amber-500"
    >
      <div className="w-full h-64 bg-slate-100 overflow-hidden" role="img" aria-label={`Banner image for ${project.title}`}>
        {project.imageUrl && (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-4 p-8">
        <div>
          <h3 className="text-lg font-bold tracking-tight group-hover:text-amber-600 transition-colors">
            <button className="text-left font-bold focus:outline-none">
              {project.title}
            </button>
          </h3>
          <p className="mt-2 font-normal text-slate-600 tracking-wide leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Batasi hanya 3 teknologi yang muncul di card utama */}
        <TechBadgeList 
          projectTitle={project.title} 
          technologies={project.technologies} 
          limit={3} 
        />
      </div>
    </article>
  );
};

export default ProjectCard;
