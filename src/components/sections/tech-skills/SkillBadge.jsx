import { Icon } from "@iconify/react";

const SkillBadge = ({ skill }) => {
  return (
    <div className="w-44 h-14 bg-white border border-slate-100 rounded-lg shadow-sm flex items-center justify-start gap-4 px-4 shrink-0">
      <Icon icon={skill.icon} height="1.5em" />
      <span className="font-medium text-sm text-slate-600 truncate">
        {skill.label}
      </span>
    </div>
  );
};

export default SkillBadge;