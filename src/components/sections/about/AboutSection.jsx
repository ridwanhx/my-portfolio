import DownloadIcon from '@iconify-react/tabler/download';

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                <aside className="w-full flex justify-center relative isolate min-h-120">
                    <div className="w-full max-w-sm min-h-120 bg-linear-120 from-amber-300 to-amber-600 rounded-3xl shadow-xl z-10 p-6 flex items-center justify-center">
                    </div>
                    <div className="absolute inset-0 w-full max-w-sm min-h-120 bg-amber-700/20 rounded-3xl -z-10 -rotate-4 translate-x-16 translate-y-5 opacity-40">
                    </div>
                </aside>

                {/* Kolom kanan: introduction */}
                <div className="px-4 md:px-8 flex flex-col text-start justify-center">
                    <header className="mb-6">
                        <span className="block uppercase text-xs font-semibold tracking-widest text-indigo-600 mb-2">
                            Let me introduce myself
                        </span>
                        <h3 className="uppercase text-3xl font-bold text-slate-600 tracking-tight leading-tight flex flex-col gap-2 items-start">
                            <span>I am <span className="inline-block text-white bg-indigo-600 px-3 py-1.5 rounded-xl -rotate-2 shadow-md">Muhamad Ridwan</span>,</span>
                            <span className="inline-block text-emerald-950 bg-emerald-400 px-3 py-1.5 rounded-xl shadow-sm text-2xl md:text-3xl">Fullstack Developer</span>
                        </h3>
                    </header>
                        <div className="mb-8 border-l-4 border-indigo-600 ps-4 tracking-wide leading-relaxed text-slate-600 font-normal">
                            <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam provident eaque beatae recusandae ipsam. Labore mollitia veniam similique.</p>
                            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis nesciunt debitis modi quo quam doloribus assumenda error nam, laborum, illo aliquam voluptatibus vero?</p>
                        </div>
                    <div>
                        <a href="/path-to-your-cv.pdf" download className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-medium rounded-full shadow-md transition-all text-sm max-w-fit">
                            <DownloadIcon height="1.25em" />
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;