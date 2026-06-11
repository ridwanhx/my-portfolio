import CalendarBlankOutlineIcon from '@iconify-react/mdi/calendar-blank-outline';
import LocationOnOutlineIcon from '@iconify-react/mdi/location-on-outline';
import CompanyIcon from '@iconify-react/mdi/company';

const WorkExperienceSection = () => {
    return (
        <section id="certificate" className="py-16 md:py-24 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <header className="text-center pb-16">
                    <h3 className="text-2xl md:text-4xl font-bold">
                       Work <span className="text-indigo-600">Experience</span>.
                    </h3>
                </header>

                {/* Experience Card */}
                <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <header className="flex justify-between items-center">
                        {/* kolom bagian kiri: nama perusahaan */}
                        <div className="flex items-center gap-4">
                            <div className="p-4 box-border bg-slate-200 flex justify-center items-center rounded-xl">
                                <CompanyIcon height='1.5em'/>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold tracking-tight">Quality Assurance</h5>
                                <span className="inline-block text-sm font-bold text-indigo-600">PT Neuronworks Indonesia</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className="flex items-center gap-2 text-slate-600 ">
                                <CalendarBlankOutlineIcon height='1.5em' />
                                <span className="text-xs font-medium">Apr 2025 - Oct 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 ">
                                <LocationOnOutlineIcon height='1.5em' />
                                <span className="text-xs font-medium">Bandung, Indonesia</span>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </section>
    );
}

export default WorkExperienceSection;