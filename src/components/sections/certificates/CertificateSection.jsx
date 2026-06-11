import CertificateGrid from "./CertificateGrid";

const CertificateSection = () => {
    return (
        <section id="tech-skills" className="py-16 md:py-24 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <header className="text-center pb-16">
                    <h3 className="text-2xl md:text-4xl font-bold">
                        Certificates & <span className="text-teal-600">Awards</span>.
                    </h3>
                </header>

                {/* Certificate Grid */}
                <CertificateGrid/>
            </div>
        </section>
    );
}

export default CertificateSection;