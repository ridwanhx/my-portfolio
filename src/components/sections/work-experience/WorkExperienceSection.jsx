import CalendarBlankOutlineIcon from '@iconify-react/mdi/calendar-blank-outline';
import LocationOnOutlineIcon from '@iconify-react/mdi/location-on-outline';
import CompanyIcon from '@iconify-react/mdi/company';
import CodeIcon from '@iconify-react/mdi/code';

const WorkExperienceSection = () => {
    return (
        <section id="work-experience" className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4">
                <header className="text-center pb-12 md:pb-16">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Work <span className="text-indigo-600">Experience</span>.
                    </h2>
                </header>

                <article className="p-6 md:p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 md:p-4 bg-slate-200 flex justify-center items-center rounded-xl shrink-0">
                                <CompanyIcon height="1.5em" className="text-slate-700" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold tracking-tight text-slate-900">Quality Assurance</h3>
                                <span className="block text-sm font-bold text-indigo-600">PT Neuronworks Indonesia</span>
                            </div>
                        </div>

                        <div className="flex flex-row sm:flex-col flex-wrap gap-x-4 gap-y-1 text-slate-600">
                            <div className="flex items-center gap-2">
                                <CalendarBlankOutlineIcon height="1.2em" className="shrink-0" />
                                <time className="text-xs font-medium" dateTime="2025-04/2025-10">Apr 2025 - Oct 2025</time>
                            </div>
                            <div className="flex items-center gap-2">
                                <LocationOnOutlineIcon height="1.2em" className="shrink-0" />
                                <span className="text-xs font-medium">Bandung, Indonesia</span>
                            </div>
                        </div>
                    </header>

                    <ul className="grid sm:grid-cols-2 gap-4 mb-8 list-none p-0">
                        <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full shrink-0 mt-1.5" aria-hidden="true"></div>
                            <p className="text-sm text-slate-600 tracking-wide leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum eveniet rem velit earum exercitationem, nisi ad voluptatum facilis qui, eligendi, possimus cupiditate neque laudantium.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full shrink-0 mt-1.5" aria-hidden="true"></div>
                            <p className="text-sm text-slate-600 tracking-wide leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum eveniet rem velit earum exercitationem, nisi ad voluptatum facilis qui, eligendi, possimus cupiditate neque laudantium.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full shrink-0 mt-1.5" aria-hidden="true"></div>
                            <p className="text-sm text-slate-600 tracking-wide leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum eveniet rem velit earum exercitationem, nisi ad voluptatum facilis qui, eligendi, possimus cupiditate neque laudantium.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full shrink-0 mt-1.5" aria-hidden="true"></div>
                            <p className="text-sm text-slate-600 tracking-wide leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum eveniet rem velit earum exercitationem, nisi ad voluptatum facilis qui, eligendi, possimus cupiditate neque laudantium.
                            </p>
                        </li>
                    </ul>

                    <footer>
                        <div className="flex items-center gap-2 text-slate-400 mb-3">
                            <CodeIcon height="1.2em" aria-hidden="true" />
                            <h4 className="text-xs uppercase font-semibold tracking-wider">Technologies used</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">Javascript</span>
                            <span className="py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">Playwright</span>
                            <span className="py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">Postman</span>
                        </div>
                    </footer>
                </article>
            </div>
        </section>
    );
};

export default WorkExperienceSection;