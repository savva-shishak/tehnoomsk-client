export function Select ({ label, value, onChange, options }) {
  return <div className="select">
    <div className="select__label">{label}</div>
    <select className="select__control"
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    >
      {options.map(({ value, label }) =>
        <option
          key={value}
          value={value}
          className="select__option"
        >
          {label}
        </option>)
      }
    </select>
  </div>;
}
