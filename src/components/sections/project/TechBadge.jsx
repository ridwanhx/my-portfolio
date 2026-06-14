const TechBadge = ({ icon, name }) => (
  <span className="flex gap-2 items-center py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
    {icon}
    {name}
  </span>
);

export default TechBadge;
