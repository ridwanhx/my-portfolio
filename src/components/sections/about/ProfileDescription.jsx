import DownloadButton from "./DownloadButton";

const ProfileDescription = ({ profile, intro, cv }) => {
  return (
    <div className="px-4 md:px-8 flex flex-col text-start justify-center">
      <header className="mb-6">
        <span className="block uppercase text-xs font-semibold tracking-widest text-indigo-600 mb-2">
          {intro.subtitle}
        </span>
        <h3 className="text-xl lg:text-3xl font-bold text-slate-800 tracking-tight leading-tight flex flex-col gap-4 items-start">
          <span>
            { intro.greeting }{" "}
            <span className="inline-block text-white bg-indigo-600 px-3 py-1.5 rounded-xl -rotate-2 shadow-md font-black transition-transform duration-300 hover:rotate-0 hover:scale-110 cursor-default">
              {profile.fullName}
            </span>
            ,
          </span>
          <span className="inline-block text-emerald-950 bg-emerald-400 px-3 py-1.5 rounded-xl shadow-sm rotate-2 font-black transition-transform duration-300 hover:rotate-0 hover:scale-110 cursor-default">
            {profile.positionName}
          </span>
        </h3>
      </header>

      <div className="mb-8 border-l-4 border-indigo-600 ps-4 tracking-normal leading-relaxed text-slate-600 font-normal text-sm md:text-base">
        {intro.paragraphs.map((text, index) => (
          <p key={index} className={index < intro.paragraphs.length - 1 ? "mb-4" : ""}>
            {text}
          </p>
        ))}
      </div>

      <DownloadButton cv={cv} />
    </div>
  );
};

export default ProfileDescription;