import FundamentalCertification from "../../../../assets/img/fundamental-web.svg";
import LaravelCertification from "../../../../assets/img/sertifikat-laravel.svg";
import GoCertification from "../../../../assets/img/sertifikat-golang.svg";
import BNSPCertification from "../../../../assets/img/BNSP-Custom.svg";
import BuildAnAIAgent from "../../../../assets/img/Build_an_AI_Agent.svg";

export const certificatesData = {
  title: {
    text: "Sertifikat &",
    highlight: "Penghargaan",
  },
  list: [
    { image: FundamentalCertification, title: "Fundamental Web" },
    { image: LaravelCertification, title: "Sertifikasi Laravel" },
    { image: GoCertification, title: "Sertifikasi Go" },
    { image: BNSPCertification, title: "Sertifikasi BNSP" },
    {
      image: BuildAnAIAgent,
      title: "Skillsbuild By Hactiv8 - Build an AI Agent Certification",
    },
  ],
};
