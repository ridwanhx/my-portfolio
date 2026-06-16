import PictureCard from './PictureCard';
import ProfileDescription from './ProfileDescription';

const AboutSection = () => {
    return (
        <section id="about" className="pb-16 md:pb-24 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
                
                {/* Kolom Kiri: Picture Card */}
                <PictureCard/>

                {/* Kolom Kanan: Introduce */}
                <ProfileDescription fullName='Muhamad Ridwan' positionName='Fullstack Developer'/>

            </div>
        </section>
    );
}

export default AboutSection;