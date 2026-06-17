import { Icon } from "@iconify/react";
import { TECH_MAP } from "../../static/techMap";

const TechBadgeList = ({ projectTitle, technologies = [], showHeader = false, limit }) => {
  const stableKey = `${projectTitle.substring(0, 5)}-${projectTitle.length}`;
  
  const shouldLimit = limit && technologies.length > limit;
  const displayedTech = shouldLimit ? technologies.slice(0, limit) : technologies;
  const extraTechCount = shouldLimit ? technologies.length - limit : 0;

  return (
    <div className={showHeader ? "border-t border-slate-100 pt-4" : ""}>
      {showHeader && (
        <div className="flex items-center gap-2 text-slate-400 mb-3">
          <Icon icon="mdi:code" height="1.2em" aria-hidden="true" />
          <h4 className="text-xs uppercase font-semibold tracking-wider">
            Technologies used
          </h4>
        </div>
      )}
      <ul className="flex flex-wrap gap-2 p-0 list-none items-center">
        {displayedTech.map((techKey, idx) => {
          const techResolved = TECH_MAP[techKey.toLowerCase()];
          if (!techResolved) return null;

          const IconComponent = techResolved.icon;

          return (
            <li key={`${stableKey}-${techKey}-${idx}`}>
              <span className="flex gap-2 items-center py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                <IconComponent height="1.1em" aria-hidden="true" />
                {techResolved.name}
              </span>
            </li>
          );
        })}
        {extraTechCount > 0 && (
          <li>
            <span className="py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
              +{extraTechCount}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TechBadgeList;