import DownloadIcon from "@iconify-react/tabler/download";

const DownloadButton = ({ btnText = "Download CV" }) => {
  return (
    <a
      href="/path-to-your-cv.pdf"
      download
      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-medium rounded-full shadow-md transition-all text-xs md:text-sm max-w-fit"
    >
      <DownloadIcon height="1.25em" />
      <span>{btnText}</span>
    </a>
  );
};

export default DownloadButton;
