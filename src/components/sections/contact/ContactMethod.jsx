const ContactMethod = ({ title, value, icon: Icon, bgClass }) => {
    return (
        <div className="flex items-center gap-4">
            <div className={`p-4 rounded-full ${bgClass}`}>
                <Icon height="1.5em" />
            </div>
            <div className="flex flex-col gap-1">
                <h5 className="text-slate-600 font-medium uppercase text-xs tracking-wider">
                    {title}
                </h5>
                <span className="text-base font-semibold text-slate-950">
                    {value}
                </span>
            </div>
        </div>
    );
};

export default ContactMethod;
