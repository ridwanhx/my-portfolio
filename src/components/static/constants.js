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

// Registry komponen ikon untuk bagian Projects & Experiences
export const TECH_REGISTRY = {
  react: { name: "React", icon: ReactIcon },
  laravel: { name: "Laravel", icon: LaravelIcon },
  tailwind: { name: "Tailwind CSS", icon: TailwindcssIcon },
  vite: { name: "Vite", icon: VitejsIcon },
  mysql: { name: "MySQL", icon: MysqlIcon },
  figma: { name: "Figma", icon: FigmaIcon },
  github: { name: "Github", icon: GithubIcon },
  fiber: { name: "Fiber", icon: FiberIcon },
  supabase: { name: "Supabase (PostgreSQL)", icon: SupabaseIcon },
  codeigniter: { name: "Codeigniter", icon: CodeigniterIcon },
  bootstrap: { name: "Bootstrap", icon: BootstrapIcon },
  trello: { name: "Trello", icon: TrelloIcon }
};

// Data statis untuk TechSkillSection (Marquee / Grid)
export const SKILLS_DATA = {
  title: {
    text: "Tech",
    highlight: "Skills"
  },
  row1: [
    { label: "Tailwind CSS", icon: "devicon:tailwindcss" },
    { label: "PostgreSQL", icon: "devicon:postgresql" },
    { label: "Next.js", icon: "devicon:nextjs" },
    { label: "Laravel", icon: "devicon:laravel" },
    { label: "React", icon: "devicon:react" },
    { label: "MongoDB", icon: "devicon:mongodb" },
    { label: "Bootstrap", icon: "devicon:bootstrap" },
    { label: "MySQL", icon: "devicon:mysql" },
    { label: "Fiber", icon: "devicon:fiber" }
  ],
  row2: [
    { label: "PHP", icon: "devicon:php" },
    { label: "JavaScript", icon: "devicon:javascript" },
    { label: "Golang", icon: "devicon:go" },
    { label: "Git", icon: "devicon:git" },
    { label: "Figma", icon: "devicon:figma" },
    { label: "Github", icon: "devicon:github" },
    { label: "Composer", icon: "devicon:composer" },
    { label: "VS Code", icon: "devicon:vscode" }
  ]
};