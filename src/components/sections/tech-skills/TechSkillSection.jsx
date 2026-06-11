import SkillRow from './SkillRow';

import TailwindcssIcon from '@iconify-react/devicon/tailwindcss';
import PostgresqlIcon from '@iconify-react/devicon/postgresql';
import NextjsIcon from '@iconify-react/devicon/nextjs';
import LaravelIcon from '@iconify-react/devicon/laravel';
import ReactIcon from '@iconify-react/devicon/react';
import BootstrapIcon from '@iconify-react/devicon/bootstrap';
import MongodbIcon from '@iconify-react/devicon/mongodb';
import MysqlIcon from '@iconify-react/devicon/mysql';
import FiberIcon from '@iconify-react/devicon/fiber';
import PhpIcon from '@iconify-react/devicon/php';
import JavascriptIcon from '@iconify-react/devicon/javascript';
import GoIcon from '@iconify-react/devicon/go';
import GitIcon from '@iconify-react/devicon/git';
import FigmaIcon from '@iconify-react/devicon/figma';
import GithubIcon from '@iconify-react/devicon/github';
import ComposerIcon from '@iconify-react/devicon/composer';
import VscodeIcon from '@iconify-react/devicon/vscode';

const TechSkillsSection = () => {
    const row1 = [
        { label: "Tailwind CSS", icon: <TailwindcssIcon height="1.5em" /> },
        { label: "PostgreSQL", icon: <PostgresqlIcon height="1.5em" /> },
        { label: "Next.js", icon: <NextjsIcon height="1.5em" /> },
        { label: "Laravel", icon: <LaravelIcon height="1.5em" /> },
        { label: "React", icon: <ReactIcon height="1.5em" /> },
        { label: "MongoDB", icon: <MongodbIcon height="1.5em" /> },
        { label: "Bootstrap", icon: <BootstrapIcon height="1.5em" /> },
        { label: "MySQL", icon: <MysqlIcon height="1.5em" /> },
        { label: "Fiber", icon: <FiberIcon height="1.5em" /> },
    ];

    const row2 = [
        { label: "PHP", icon: <PhpIcon height="1.5em" /> },
        { label: "JavaScript", icon: <JavascriptIcon height="1.5em" /> },
        { label: "Golang", icon: <GoIcon height="1.5em" /> },
        { label: "Git", icon: <GitIcon height="1.5em" /> },
        { label: "Figma", icon: <FigmaIcon height="1.5em" /> },
        { label: "Github", icon: <GithubIcon height="1.5em" /> },
        { label: "Composer", icon: <ComposerIcon height="1.5em" /> },
        { label: "VS Code", icon: <VscodeIcon height="1.5em" /> },
    ];

    return (
        <section id="tech-skills" className="py-16 md:py-24 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <header className="text-center pb-16">
                    <h3 className="text-2xl md:text-4xl font-bold">
                        Tech <span className="text-pink-600">Skills</span>.
                    </h3>
                </header>

                <div className="flex flex-col gap-6 w-full overflow-hidden relative">
                    {/* Efek Blur Gradient Sisi Kiri & Kanan */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                    {/* Implementasi Baris Berjalan */}
                    <SkillRow skills={row1} direction="left" rowId="row1" />
                    <SkillRow skills={row2} direction="right" rowId="row2" />
                </div>
            </div>
        </section>
    );
};

export default TechSkillsSection;
