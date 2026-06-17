import { Icon } from "@iconify/react";

const DownloadButton = ({ cv }) => {
  return (
    <a
      href={cv.downloadUrl}
      download
      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-medium rounded-full shadow-md transition-all text-xs md:text-sm max-w-fit"
    >
      <Icon icon="tabler:download" height="1.25em" />
      <span>{cv.text}</span>
    </a>
  );
};

export default DownloadButton;