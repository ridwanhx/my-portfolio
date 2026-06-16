import DownloadButton from "./DownloadButton";

const ProfileDescription = ({ fullName = "Guest", positionName = "Developer" }) => {
  return (
    <div className="px-4 md:px-8 flex flex-col text-start justify-center">
      <header className="mb-6">
        <span className="block uppercase text-xs font-semibold tracking-widest text-indigo-600 mb-2">
          Let me introduce myself
        </span>
        <h3 className="text-xl lg:text-3xl font-bold text-slate-800 tracking-tight leading-tight flex flex-col gap-4 items-start">
          <span>
            I am{" "}
            <span className="inline-block text-white bg-indigo-600 px-3 py-1.5 rounded-xl -rotate-2 shadow-md font-black transition-transform duration-300 hover:rotate-0 hover:scale-110 cursor-default">
              { fullName }
            </span>
            ,
          </span>
          <span className="inline-block text-emerald-950 bg-emerald-400 px-3 py-1.5 rounded-xl shadow-sm rotate-2 font-black transition-transform duration-300 hover:rotate-0 hover:scale-110 cursor-default">
            {positionName}
          </span>
        </h3>
      </header>

      <div className="mb-8 border-l-4 border-indigo-600 ps-4 tracking-normal leading-relaxed text-slate-600 font-normal text-sm md:text-base">
        <p className="mb-4">
          As a Fullstack Developer, I specialize in engineering scalable, end-to-end web solutions. My technical expertise bridges high-performance backend systems with dynamic, modern user interfaces.
        </p>
        <p>
          My daily stack includes building robust ecosystems utilizing Laravel, React, and Next.js. Focused on efficiency and clean architecture, I deliver high-quality, secure digital products tailored to modern industry standards.
        </p>
      </div>

      <DownloadButton />
    </div>
  );
};

export default ProfileDescription;
