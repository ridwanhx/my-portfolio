import TailwindcssIcon from '@iconify-react/devicon/tailwindcss';
import MysqlIcon from '@iconify-react/devicon/mysql';
import CodeigniterIcon from '@iconify-react/logos/codeigniter-icon';
import BootstrapIcon from '@iconify-react/devicon/bootstrap';
import FigmaIcon from '@iconify-react/devicon/figma';
import GithubIcon from '@iconify-react/devicon/github';
import TrelloIcon from '@iconify-react/devicon/trello';
import LaravelIcon from '@iconify-react/devicon/laravel';
import VitejsIcon from '@iconify-react/devicon/vitejs';
import ReactIcon from '@iconify-react/devicon/react';
import SupabaseIcon from '@iconify-react/devicon/supabase';
import FiberIcon from '@iconify-react/devicon/fiber';

export const HOME_DATA = {
  hero: {
    greeting: "Hello, I am",
    typingTexts: ["Muhamad Ridwan."],
    role: "Fullstack Developer",
    description: "Building functional, interactive, and user-centric web applications.",
    actions: {
      primary: { text: "View Project", href: "#projects", icon: "lucide:briefcase" },
      secondary: { text: "Contact Me", href: "#contact", icon: "lucide:mail" }
    }
  },
  
  socials: [
    { name: "Github", href: "https://github.com", label: "Github Profile", icon: "mdi:github" },
    { name: "Instagram", href: "https://instagram.com", label: "Instagram Profile", icon: "mdi:instagram" },
    { name: "Linkedin", href: "https://linkedin.com", label: "Linkedin Profile", icon: "mdi:linkedin" }
  ],

  profileCard: {
    firstName: "Muhamad",
    lastName: "Ridwan",
    role: "Fullstack Developer"
  },

  statusBadge: {
    username: "@muha.rdwn0414",
    statusText: "Online",
    action: { text: "Contact Me", href: "#contact" }
  }
};

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
        id: "pundihijau-app",
        title: "Web Application for Sustainable Waste Bank Management (PUNDIHIJAU)",
        description: "An eco-friendly platform designed to streamline waste bank operations, enabling users to track their recycling contributions, manage waste deposits, and convert accumulated waste into financial savings effectively.",
        imageUrl: "../../../src/assets/img/Pundihijau.svg",
        technologies: [
            { id: "react-1", name: "React", icon: ReactIcon },
            { id: "laravel-1", name: "Laravel", icon: LaravelIcon },
            { id: "tailwind-1", name: "Tailwind CSS", icon: TailwindcssIcon },
            { id: "vite-1", name: "Vite", icon: VitejsIcon },
            { id: "mysql-1", name: "MySQL", icon: MysqlIcon },
            { id: "figma-1", name: "Figma", icon: FigmaIcon },
            { id: "github-1", name: "Github", icon: GithubIcon },
        ]
    },
    {
        id: "ulasin-app",
        title: "Web Application for Cinema Reviews & Ratings (ULASIN)",
        description: "A dynamic movie review hub where film enthusiasts can discover popular titles, share authentic ratings, write uncensored critiques, and engage with a community-driven database of cinematic insights.",
        imageUrl: "../../../src/assets/img/Ulasin.svg",
        technologies: [
            { id: "react-1", name: "React", icon: ReactIcon },
            { id: "tailwind-1", name: "Tailwind CSS", icon: TailwindcssIcon },
            { id: "fiber-1", name: "Fiber", icon: FiberIcon },
            { id: "supabase-1", name: "Supabase (PostgreSQL)", icon: SupabaseIcon },
            { id: "vite-1", name: "Vite", icon: VitejsIcon },
            { id: "figma-1", name: "Figma", icon: FigmaIcon },
            { id: "github-1", name: "Github", icon: GithubIcon },
        ]
    },
    {
        id: "neu-internity-app",
        title: "Web Application for Intern Daily Activity Monitoring (NEU INTERNITY)",
        description: "A monitoring tool built to track interns' daily progress and tasks. It facilitates transparent logbook management, supervisor evaluations, and activity tracking for seamless internship workflows.",
        imageUrl: "../../../src/assets/img/Neu-internity.svg",
        technologies: [
            { id: "laravel-1", name: "Laravel", icon: LaravelIcon },
            { id: "tailwind-1", name: "Tailwind CSS", icon: TailwindcssIcon },
            { id: "vite-1", name: "Vite", icon: VitejsIcon },
            { id: "mysql-1", name: "MySQL", icon: MysqlIcon },
            { id: "figma-1", name: "Figma", icon: FigmaIcon },
            { id: "github-1", name: "Github", icon: GithubIcon },
        ]
    },
    {
        id: "simonipro-app",
        title: "Web Application for Project Course Monitoring (SIMONIPRO)",
        description: "A structured academic management web system engineered to monitor course project milestones, allowing students and instructors to collaborate, submit deliverables, and track project grading criteria.",
        imageUrl: "../../../src/assets/img/Simonipro.svg",
        technologies: [
            { id: "codeigniter-1", name: "Codeigniter", icon: CodeigniterIcon },
            { id: "bootstrap-1", name: "Bootstrap", icon: BootstrapIcon },
            { id: "mysql-1", name: "MySQL", icon: MysqlIcon },
            { id: "figma-1", name: "Figma", icon: FigmaIcon },
            { id: "github-1", name: "Github", icon: GithubIcon },
        ]
    },
    {
        id: "disunting-app",
        title: "Digital Platform for Stunting Education (DISUNTING)",
        description: "An interactive educational web platform focused on raising stunting awareness. It provides communities with critical nutritional guides, health metrics tracking, and child growth monitoring tools.",
        imageUrl: "../../../src/assets/img/Disunting.svg",
        technologies: [
            { id: "codeigniter-1", name: "Codeigniter", icon: CodeigniterIcon },
            { id: "bootstrap-1", name: "Bootstrap", icon: BootstrapIcon },
            { id: "mysql-1", name: "MySQL", icon: MysqlIcon },
            { id: "figma-1", name: "Figma", icon: FigmaIcon },
            { id: "github-1", name: "Github", icon: GithubIcon },
            { id: "trello-1", name: "Trello", icon: TrelloIcon },
        ]
    },
];


