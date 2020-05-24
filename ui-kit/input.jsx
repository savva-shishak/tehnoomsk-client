export function Input ({ label, value, onChange, type, placeholder }) {
  return <div className="input">
    <div className="input__label">{label}</div>
    <input type={type || 'text'} placeholder={placeholder || ''} value={value} onChange={({ target: { value } }) => onChange(value)} className="input__control"/>
  </div>;
}

export function TextArea ({ rows, label, value, onChange, type, placeholder }) {
  return <div className="input">
    <div className="input__label">{label}</div>
    <textarea
      rows={rows}
      type={type || 'text'}
      placeholder={placeholder || ''}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      className="input__control"
    />
  </div>;
}
