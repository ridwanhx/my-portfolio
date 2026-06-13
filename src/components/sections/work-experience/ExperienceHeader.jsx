import CalendarBlankOutlineIcon from "@iconify-react/mdi/calendar-blank-outline";
import LocationOnOutlineIcon from "@iconify-react/mdi/location-on-outline";
import CompanyIcon from "@iconify-react/mdi/company";

const ExperienceHeader = ({ role, company, period, dateTime, location }) => {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
      <div className="flex items-center gap-4">
        <div className="p-3 md:p-4 bg-slate-200 flex justify-center items-center rounded-xl shrink-0">
          <CompanyIcon height="1.5em" className="text-slate-700" />
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-tight text-slate-900">
            {role}
          </h3>
          <span className="block text-sm font-bold text-indigo-600">
            {company}
          </span>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col flex-wrap gap-x-4 gap-y-1 text-slate-600">
        <div className="flex items-center gap-2">
          <CalendarBlankOutlineIcon height="1.2em" className="shrink-0" />
          <time className="text-xs font-medium" dateTime={dateTime}>
            {period}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <LocationOnOutlineIcon height="1.2em" className="shrink-0" />
          <span className="text-xs font-medium">{location}</span>
        </div>
      </div>
    </header>
  );
};

export default ExperienceHeader;
