const CertificateCard = ({ image, title }) => {
  return (
    <div className="w-full aspect-4/3 bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <img
        src={image}
        alt={title || "Sertifikat Kompetensi"}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default CertificateCard;