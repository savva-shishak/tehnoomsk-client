export function Input({label, value, onChange, type}) {

    return <div className="input">
        <div className="input__label">{label}</div>
        <input type={type || "text"} value={value} onChange={({target: {value}}) => onChange(value)} className="input__control"/>
        <style jsx>{`
            .input {
                text-align: center;
            }

            .input__control {
                width: 100%;
                padding: 5px;
                text-align: center
            }
        `}</style>
    </div>
}