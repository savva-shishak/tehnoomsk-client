export function Tab ({ label, isActive, onSelect }) {
  return <div onClick={onSelect} className={'tab tab_' + (isActive && 'active')}>
    <div className="tab__label">{label}</div>
  </div>;
}

export function TabBody ({ children, isActive }) {
  return !isActive || <div className="tab-body">{children}</div>;
}

export function TabsGroup ({ children }) {
  return <div className="tabs-group">
    {children}
  </div>;
}
