import { Item } from './Item';

export function Items ({ items, onSelect }) {
  return <div>
    { items != null && items.map(item =>
      <Item
        key={item.id}
        item={item}
        isSelected={false}
        onSelect={onSelect}
      />
    )}
  </div>;
}
