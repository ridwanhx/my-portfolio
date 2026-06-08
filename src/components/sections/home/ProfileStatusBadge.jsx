const ProfileStatusBadge = () => {
  return (
    <div className="w-full p-3 bg-slate-700/50 backdrop-blur-md rounded-full flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        {/* Avatar Placeholder */}
        <div
          className="w-10 h-10 bg-red-300 rounded-full shrink-0"
          aria-hidden="true"
        ></div>
        <div className="truncate">
          <span className="text-xs font-semibold text-white block truncate">
            @muha.rdwn0414
          </span>
          <span className="text-[10px] text-green-400 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span>
            Online
          </span>
        </div>
      </div>
      <a
        href="#contact"
        className="py-2 px-4 bg-white text-slate-900 rounded-full font-semibold text-xs hover:bg-slate-100 transition-colors whitespace-nowrap"
      >
        Contact Me
      </a>
    </div>
  );
};

export default ProfileStatusBadge;
