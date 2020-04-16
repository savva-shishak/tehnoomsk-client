export function Input({label, value, onChange, type, placeholder}) {

    return <div className="input">
        <div className="input__label">{label}</div>
        <input type={type || "text"} placeholder={placeholder || ''} value={value} onChange={({target: {value}}) => onChange(value)} className="input__control"/>
    </div>
}