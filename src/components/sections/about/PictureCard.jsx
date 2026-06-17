import profileImg from "../../../assets/img/profile-2.webp";

const PictureCard = () => {
  return (
    <aside className="w-full flex justify-center relative isolate min-h-120 card-magician-deck cursor-pointer md:pr-12 transition-all duration-500">
      <div className="w-full max-w-sm min-h-120 bg-linear-120 from-amber-300 to-amber-600 rounded-3xl shadow-xl z-30 flex items-center justify-center overflow-hidden relative">
        <img
          src={profileImg}
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>
      <div className="absolute inset-0 w-full max-w-sm min-h-120 bg-linear-120 from-amber-400/20 to-amber-600/20 border border-amber-500/20 rounded-3xl z-20 opacity-0 card-layer card-layer-middle backdrop-blur-xs"></div>
      <div className="absolute inset-0 w-full max-w-sm min-h-120 bg-linear-120 from-amber-500/10 to-amber-700/10 border border-amber-600/10 rounded-3xl z-10 opacity-0 card-layer card-layer-back backdrop-blur-xs"></div>
    </aside>
  );
};

export default PictureCard;