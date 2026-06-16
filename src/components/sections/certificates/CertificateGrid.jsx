// aset gambar
import FundamentalCertification from "../../../assets/img/fundamental-web.svg";
import LaravelCertification from "../../../assets/img/sertifikat-laravel.svg";
import GoCertification from "../../../assets/img/sertifikat-golang.svg";
import BNSPCertification from "../../../assets/img/BNSP-Custom.svg";
import CertificateCard from "./CertificateCard";

const CertificateGrid = () => {
  const certificates = [
    { image: FundamentalCertification, title: "Fundamental Web" },
    { image: LaravelCertification, title: "Sertifikasi Laravel" },
    { image: GoCertification, title: "Sertifikasi Go" },
    { image: BNSPCertification, title: "Sertifikasi BNSP" },
  ];

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
