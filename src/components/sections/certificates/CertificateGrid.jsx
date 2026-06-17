import CertificateCard from "./CertificateCard";

const CertificateGrid = ({ certificates }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      {certificates.map((certificate, index) => (
        <CertificateCard
          key={index}
          image={certificate.image}
          title={certificate.title}
        />
      ))}
    </div>
  );
};

export default CertificateGrid;