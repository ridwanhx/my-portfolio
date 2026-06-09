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
            <span className="inline-block text-white bg-indigo-600 px-3 py-1.5 rounded-xl -rotate-2 shadow-md font-black">
              { fullName }
            </span>
            ,
          </span>
          <span className="inline-block text-emerald-950 bg-emerald-400 px-3 py-1.5 rounded-xl shadow-sm rotate-2 font-black">
            {positionName}
          </span>
        </h3>
      </header>

      <div className="mb-8 border-l-4 border-indigo-600 ps-4 tracking-normal leading-relaxed text-slate-600 font-normal text-sm md:text-base">
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          provident eaque beatae recusandae ipsam. Labore mollitia veniam
          similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          perferendis nesciunt debitis modi quo quam doloribus assumenda error
          nam, laborum, illo aliquam voluptatibus vero?
        </p>
      </div>

      <DownloadButton />
    </div>
  );
};

export default ProfileDescription;
