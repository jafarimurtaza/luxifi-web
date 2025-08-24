export function SelectField({ label, name, value, onChange, options = [] }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 cursor-pointer bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
