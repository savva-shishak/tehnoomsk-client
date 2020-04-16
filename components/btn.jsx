export function Btn({label, onClick}) {
    return <div onClick={onClick} className="btn">
        {label}
        <style jsx>{`
            .btn {
                background: #e2e2e2;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
                margin: 10px 0;
            
                &:hover {
                    background: #9c9c9c;
                }
            }
        `}</style>
    </div>
}