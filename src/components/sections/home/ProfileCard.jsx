import { useState } from "react";
import ProfileStatusBadge from "./ProfileStatusBadge";
import ProfileImg from "../../../assets/img/profile-1.webp";

const ProfileCard = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();

    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    const rotateX = -(y / 35); 
    const rotateY = x / 25; 

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="w-full flex justify-center perspective-[1000px]">
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.3s ease" : "transform 0.5s ease-in-out, box-shadow 0.5s ease",
        }}
        className="w-full max-w-sm min-h-120 bg-slate-500 backdrop-blur flex flex-col justify-between border border-white rounded-3xl overflow-hidden preserve-3d cursor-pointer select-none"
        // Efek bayangan dinamis
        className={`w-full max-w-sm min-h-120 bg-slate-500/80 backdrop-blur flex flex-col justify-between border border-white/20 rounded-3xl overflow-hidden preserve-3d cursor-pointer transition-shadow duration-500 ${
          isHovered ? "shadow-[0_30px_50px_rgba(0,0,0,0.35)]" : "shadow-lg"
        }`}
      >
        <img 
          src={ProfileImg} 
          alt="Background" 
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 z-0 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          style={{ transform: 'translateZ(0px)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 z-0 pointer-events-none" />

        
        {/* Bagian Atas Kartu */}
        <div className="m-6 my-8 preserve-3d transform-[translateZ(20px)]">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Muhamad
            <span className="text-amber-500 ms-1">Ridwan</span>
          </h2>
          <p className="text-sm font-medium tracking-tight text-slate-200 mt-1">
            Fullstack Developer
          </p>
        </div>

        {/* Bagian Bawah Kartu (Status & Kontak Cepat) */}
        <div className="m-6 my-8 preserve-3d transform-[translateZ(40px)]">
          <ProfileStatusBadge />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
