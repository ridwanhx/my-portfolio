const InputField = ({ id, label, type = "text", placeholder, isTextArea = false, rows = 5, value, onChange, required, helperText }) => {
  const baseClasses = "p-4 bg-slate-100 border border-slate-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-950 transition-shadow w-full";

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-0.5">
        <label htmlFor={id} className="text-base font-medium text-slate-950 tracking-tight">
          {label}
        </label>
        {/* Teks panduan opsional berwarna merah */}
        {helperText && (
          <span className="text-xs font-medium text-rose-600 tracking-wide">
            {helperText}
          </span>
        )}
      </div>

      {isTextArea ? (
        <textarea id={id} rows={rows} className={baseClasses} placeholder={placeholder} value={value} onChange={onChange} required={required} />
      ) : (
        <input id={id} type={type} className={baseClasses} placeholder={placeholder} value={value} onChange={onChange} required={required} />
      )}
    </div>
  );
};

export default InputField;