import ProfileStatusBadge from "./ProfileStatusBadge";

const ProfileCard = () => {
  return (
    <aside className="w-full flex justify-center">
      <div className="w-full max-w-sm min-h-120 bg-slate-500 backdrop-blur flex flex-col justify-between border border-white rounded-3xl overflow-hidden shadow-lg">
        {/* Bagian Atas Kartu */}
        <div className="m-6 my-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Muhamad
            <span className="text-amber-500 ms-1">Ridwan</span>
          </h2>
          <p className="text-sm font-medium tracking-tight text-slate-200 mt-1">
            Fullstack Developer
          </p>
        </div>

        {/* Bagian Bawah Kartu (Status & Kontak Cepat) */}
        <div className="m-6 my-8">
          <ProfileStatusBadge />
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;
