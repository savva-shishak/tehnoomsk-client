export function Tags ({ tags, onDelete }) {
  return <div className="tags">
    {tags.map(tag => {
      return <div key={tag} className="tags__item">
        <div className="tags__value">{tag}</div>
        <div onClick={() => onDelete(tag)} className="tags__del">X</div>
      </div>;
    })}
  </div>;
}
