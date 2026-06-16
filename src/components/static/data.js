import Html5Icon from '@iconify-react/devicon/html5';
import JavascriptIcon from '@iconify-react/devicon/javascript';
import PhpIcon from '@iconify-react/devicon/php';
import TailwindcssIcon from '@iconify-react/devicon/tailwindcss';
import MysqlIcon from '@iconify-react/devicon/mysql';

export const WORK_EXPERIENCE = [
    {
        id: crypto.randomUUID(),
        role: "QA Tester Intern",
        company: "PT. Neuronworks Indonesia",
        period: "Apr 2025 - Oct 2025",
        dateTime: "2025-04/2025-10",
        location: "Bandung, Indonesia",
        responsibilities: [
            "Menganalisis spesifikasi kebutuhan sistem untuk memahami alur bisnis yang akan diuji.",
            "Menyusun skenario pengujian (test cases) yang komprehensif guna meminimalisir celah error.",
            "Mendokumentasikan temuan teknis dan bug secara sistematis melalui platform GitLab.",
            "Berkolaborasi aktif dengan tim pengembang dalam memastikan resolusi masalah sesuai standar kualitas."
        ],
        technologies: ["JavaScript", "Postman", "Playwright", "GitLab"]
    },
    {
        id: crypto.randomUUID(),
        role: "IT Support Intern",
        company: "PT. Jasamedika Saranatama",
        period: "Jun 2021 - Sep 2021",
        dateTime: "2021-06/2021-09",
        location: "Bandung, Indonesia",
        responsibilities: [
            "Memantau dan mengidentifikasi kendala teknis yang terjadi pada operasional harian.",
            "Mendokumentasikan laporan kendala IT secara rutin untuk menjaga transparansi performa sistem.",
            "Menyediakan data laporan valid sebagai bahan evaluasi perbaikan sistem IT perusahaan."
        ],
        technologies: ["Microsoft SQL Server"]
    }
];

export const PROJECTS_DATA = [
    {
        id: "course-attendance-portal",
        title: "Course Attendance Web Portal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: "",
        technologies: [
            { id: "html-1", name: "HTML", icon: Html5Icon },
            { id: "javascript-1", name: "Javascript", icon: JavascriptIcon },
            { id: "php-1", name: "PHP", icon: PhpIcon },
            { id: "tailwind-1", name: "Tailwind CSS", icon: TailwindcssIcon },
            { id: "mysql-1", name: "MySQL", icon: MysqlIcon }
        ]
    },
    {
        id: "monitoring-website-platform",
        title: "Monitoring Website Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: "",
        technologies: [
            { id: "html-1", name: "HTML", icon: Html5Icon },
            { id: "javascript-1", name: "Javascript", icon: JavascriptIcon },
            { id: "php-1", name: "PHP", icon: PhpIcon },
            { id: "tailwind-1", name: "Tailwind CSS", icon: TailwindcssIcon },
            { id: "mysql-1", name: "MySQL", icon: MysqlIcon }
        ]
    },
];

