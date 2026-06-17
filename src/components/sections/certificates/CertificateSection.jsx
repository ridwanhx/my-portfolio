import { CERTIFICATES_DATA } from "../../static/data";
import CertificateGrid from "./CertificateGrid";

const CertificateSection = () => {
  const { title, list } = CERTIFICATES_DATA;

  return (
    <section id="certificate" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center pb-16">
          <h3 className="text-2xl md:text-4xl font-bold">
            {title.text} <span className="text-teal-600">{title.highlight}</span>.
          </h3>
        </header>

        <CertificateGrid certificates={list} />
      </div>
    </section>
  );
};

export default CertificateSection;