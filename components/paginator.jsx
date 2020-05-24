import React from 'react';
import { Link } from '../utils/Link';
import { useRouter } from 'next/router';

export function Paginator ({ lessLabel, end, onSelect, pos }) {
  if (end <= 1) {
    return <span></span>;
  }

  const { query: { page } } = useRouter();

  const position = pos || page || 1;

  return (
    <div className="paginator">
      {!lessLabel && <div className="paginator__label">Посмотреть наши предыдущие публикации:</div>}
      <div className="paginator__control">
        {position > 3 && <IfNotOnSelectThenLink onSelect={onSelect} page={Math.max(position - 5, 1)}>
          <div className="paginator__arrow">
            <img src='/paginator/left.png'/>
          </div>
        </IfNotOnSelectThenLink>}
        <div className="paginator__numbers">
          <Numbers position={position} end={end} onSelect={onSelect} />
        </div>
        {(+position + 3) < end && <IfNotOnSelectThenLink onSelect={onSelect} page={Math.min(+position + +5, end)}>
          <div className="paginator__arrow">
            <img src='/paginator/right.png'/>
          </div>
        </IfNotOnSelectThenLink>}
      </div>
    </div>
  );
}

function Numbers ({ position, end, onSelect }) {
  let start;

  if (position > 3) {
    start = position - 2;
  } else {
    start = 1;
  }

  const numNumbers = Math.min(5, (end || 1) - start);

  const numbers = Array.from(Array(numNumbers), (_, i) => i + start);

  function getClassStyle (num) {
    return 'paginator__number ' + (num === position ? ' paginator__number_active' : '');
  }

  return (
    <div className="paginator__numbers">
      {start !== 1 && <div className="paginator__number">...</div>}
      {numbers.map(num =>
        <IfNotOnSelectThenLink onSelect={onSelect} key={num} page={num} >
          <div className={getClassStyle(num)}>
            {num}
          </div>
        </IfNotOnSelectThenLink>
      )}
      {start + 5 < end && <div className="paginator__number">...</div>}
      {start + 5 >= end &&
                <IfNotOnSelectThenLink onSelect={onSelect} page={end} >
                  <div className={getClassStyle(end)}>{end}</div>
                </IfNotOnSelectThenLink>
      }
    </div>
  );
}

function IfNotOnSelectThenLink ({ page, onSelect, children }) {
  if (!onSelect) {
    return <Link page={page}>
      {children}
    </Link>;
  } else {
    return <div onClick={() => onSelect(page)}>
      {children}
    </div>;
  }
}
