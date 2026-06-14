import Html5Icon from '@iconify-react/devicon/html5';
import JavascriptIcon from '@iconify-react/devicon/javascript';
import PhpIcon from '@iconify-react/devicon/php';
import TailwindcssIcon from '@iconify-react/devicon/tailwindcss';
import MysqlIcon from '@iconify-react/devicon/mysql';

export const WORK_EXPERIENCE = [
    {
        id: crypto.randomUUID(),
        role: "Quality Assurance",
        company: "PT Neuronworks Indonesia",
        period: "Apr 2025 - Oct 2025",
        dateTime: "2025-04/2025-10",
        location: "Bandung, Indonesia",
        responsibilities: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum eveniet rem velit earum exercitationem, nisi ad voluptatum facilis qui.",
            "Mola ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum eveniet rem velit earum exercitationem, nisi ad voluptatum facilis qui.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum eveniet rem velit earum exercitationem, nisi ad voluptatum facilis qui.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum eveniet rem velit earum exercitationem, nisi ad voluptatum facilis qui."
        ],
        technologies: ["Javascript", "Playwright", "Postman"]
    },
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
    }
];

