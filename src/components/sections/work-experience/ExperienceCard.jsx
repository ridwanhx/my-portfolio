import CodeIcon from "@iconify-react/mdi/code";
import TechBadge from "./TechBadge";
import ExperienceHeader from "./ExperienceHeader";

const ExperienceCard = ({ exp }) => {
  return (
    <article className="p-6 md:p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
      {/* Header */}
      <ExperienceHeader
        role={exp.role}
        company={exp.company}
        period={exp.period}
        dateTime={exp.dateTime}
        location={exp.location}
      />

      <ul className="grid sm:grid-cols-2 gap-4 mb-8 list-none p-0">
        {(exp.responsibilities || []).map((task, index) => {
          // trim text dari karakter seperti spasi, agar menghasilkan unique key yang lebih rapi
          const cleanText = task.trim().replace(/\s+/g, "");
          const uniqueKey = `${cleanText.substring(0, 5)}-${task.length}-${index}`;

          return (
            <li key={uniqueKey} className="flex items-start gap-3">
              <div
                className="w-2 h-2 bg-indigo-600 rounded-full shrink-0 mt-1.5"
                aria-hidden="true"
              ></div>
              <p className="text-sm text-slate-600 tracking-wide leading-relaxed">
                {task}
              </p>
            </li>
          );
        })}
      </ul>

      <footer>
        <div className="flex items-center gap-2 text-slate-400 mb-3">
          <CodeIcon height="1.2em" aria-hidden="true" />
          <h4 className="text-xs uppercase font-semibold tracking-wider">
            Technologies used
          </h4>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {(exp.technologies || []).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </footer>
    </article>
  );
};

export default ExperienceCard;
