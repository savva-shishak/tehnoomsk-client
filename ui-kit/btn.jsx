export function Btn ({ label, onClick, maxWidth }) {
  return <div onClick={onClick} style={{ width: maxWidth ? '100%' : 'max-content' }} className="btn">
    <div className="btn__container">
      {label}
    </div>
  </div>;
}
