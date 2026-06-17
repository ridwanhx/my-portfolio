import { useLanguage } from "../../../context/LanguageContext";
import PictureCard from "./PictureCard";
import ProfileDescription from "./ProfileDescription";

const AboutSection = () => {
  const { data } = useLanguage();
  const { profile, introduction, cvButton } = data.ABOUT_DATA;
  return (
    <section id="about" className="pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <PictureCard />
        <ProfileDescription 
          profile={profile} 
          intro={introduction}
          cv={cvButton}
        />
      </div>
    </section>
  );
};

export default AboutSection;