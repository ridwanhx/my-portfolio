import { useState, useEffect } from "react";
import BriefcaseIcon from "@iconify-react/lucide/briefcase";
import MailIcon from "@iconify-react/lucide/mail";
import SocialLinks from "./SocialLinks";
import ProfileCard from "./ProfileCard";

const textArray = ["Muhamad Ridwan."];

const HomeSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = textArray[loopIndex % textArray.length];

      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === currentFullText) {
          setTypingSpeed(2500);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        setTypingSpeed(70);

        if (currentText === "") {
          setIsDeleting(false);
          setLoopIndex(loopIndex + 1);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopIndex, typingSpeed]);

  const renderTypingText = () => {
    if (currentText.startsWith("Muhamad ")) {
      const setelahMuhamad = currentText.slice(8);
      return (
        <>
          Muhamad <span className="text-indigo-600">{setelahMuhamad}</span>
        </>
      );
    }
    return currentText;
  };

  return (
    <section id="home" className="py-16 md:py-24">
      {/* Grid container utama */}
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-stretch">
        {/* Kolom Kiri: Konten Utama */}
        <div className="px-4 md:px-8 flex flex-col justify-center text-start">
          {/* Header Kecil */}
          <span className="block uppercase font-medium text-slate-600 mb-4 tracking-wide text-sm">
            Hello, I am
          </span>

          {/* Nama Utama dengan Efek Typing React */}
          <div className="min-h-16 md:min-h-24 flex items-center mb-4">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              {renderTypingText()}
              <span className="inline-block w-1 h-10 md:h-16 bg-indigo-600 ml-1 translate-y-1 md:translate-y-2 animate-blink shrink-0"></span>
            </h1>
          </div>

          {/* Interests */}
          <p className="text-sm md:text-lg font-bold text-slate-700 mb-6">
            Fullstack Developer
          </p>

          {/* Navigasi Sosial Media */}
          <SocialLinks />

          {/* Deskripsi */}
          <p className="mb-9 leading-relaxed text-slate-600">
            Building functional, interactive, and user-centric web applications.
          </p>

          {/* main actions */}
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="flex items-center justify-center space-x-1.5 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors text-xs md:text-sm"
            >
              <BriefcaseIcon height="1.5em" />
              <span>View Project</span>
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center space-x-1.5 px-5 py-3 border border-slate-300 rounded-full font-medium hover:bg-slate-50 transition-colors text-xs md:text-sm"
            >
              <MailIcon height="1.5em" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Profile Card */}
        <ProfileCard />
      </div>
    </section>
  );
};

export default HomeSection;
