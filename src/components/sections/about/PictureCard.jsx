const PictureCard = () => {
  return (
    <aside className="w-full flex justify-center relative isolate min-h-120">
      <div className="w-full max-w-sm min-h-120 bg-linear-120 from-amber-300 to-amber-600 rounded-3xl shadow-xl z-10 p-6 flex items-center justify-center"></div>
      <div className="absolute inset-0 w-full max-w-sm min-h-120 bg-amber-700/20 rounded-3xl -z-10 -rotate-4 translate-x-16 translate-y-5 opacity-40"></div>
    </aside>
  );
};

export default PictureCard;
