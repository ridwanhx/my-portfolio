import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";
import SocialLinks from "./SocialLinks";
import ProfileCard from "./ProfileCard";

const HomeSection = () => {
  const { data } = useLanguage();
  const { hero, socials, profileCard, statusBadge } = data.HOME_DATA;
  
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = hero.typingTexts;

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
  }, [currentText, isDeleting, loopIndex, typingSpeed, textArray]);

  const renderTypingText = () => {
    const firstWord = textArray[0].split(" ")[0]; 
    if (currentText.startsWith(firstWord + " ")) {
      const remainingText = currentText.slice(firstWord.length + 1);
      return (
        <>
          {firstWord}{" "}
          <span className="text-indigo-600">{remainingText}</span>
        </>
      );
    }
    return currentText;
  };

  return (
    <section id="home" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-stretch">
        
        <div className="px-4 md:px-8 flex flex-col justify-center text-start">
          <span className="block uppercase font-medium text-slate-600 mb-4 tracking-wide text-sm">
            {hero.greeting}
          </span>

          <div className="min-h-16 md:min-h-24 flex items-center mb-4">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              {renderTypingText()}
              <span className="inline-block w-1 h-10 md:h-16 bg-indigo-600 ml-1 translate-y-1 md:translate-y-2 animate-blink shrink-0"></span>
            </h1>
          </div>

          <p className="text-base md:text-lg font-bold text-slate-700 mb-6">
            {hero.role}
          </p>

          <SocialLinks links={socials} />

          <p className="mb-9 leading-relaxed text-slate-600">
            {hero.description}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={hero.actions.primary.href}
              className="flex items-center justify-center space-x-1.5 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors text-xs md:text-sm"
            >
              <Icon icon={hero.actions.primary.icon} height="1.5em" />
              <span>{hero.actions.primary.text}</span>
            </a>
            <a
              href={hero.actions.secondary.href}
              className="flex items-center justify-center space-x-1.5 px-5 py-3 border bg-white border-slate-300 rounded-full font-medium hover:bg-slate-50 transition-colors text-xs md:text-sm"
            >
              <Icon icon={hero.actions.secondary.icon} height="1.5em" />
              <span>{hero.actions.secondary.text}</span>
            </a>
          </div>
        </div>

        <ProfileCard cardData={profileCard} badgeData={statusBadge} />
      </div>
    </section>
  );
};

export default HomeSection;