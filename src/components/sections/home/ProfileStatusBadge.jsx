import ProfileImg from "../../../assets/img/profile-badge.webp";

const ProfileStatusBadge = ({ badgeData }) => {
  return (
    <div className="w-full p-3 bg-slate-700/50 backdrop-blur-md rounded-full flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <img
          src={ProfileImg}
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover shrink-0 border border-white/20"
        />
        <div className="truncate">
          <span className="text-xs font-semibold text-white block truncate">
            {badgeData.username}
          </span>
          <span className="text-[10px] text-green-400 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span>
            {badgeData.statusText}
          </span>
        </div>
      </div>
      <a
        href={badgeData.action.href}
        className="py-2 px-4 bg-white text-slate-900 rounded-full font-semibold text-xs hover:bg-slate-100 transition-colors whitespace-nowrap"
      >
        {badgeData.action.text}
      </a>
    </div>
  );
};

export default ProfileStatusBadge;