import React from 'react';
import Link from 'next/link';

export function BMini ({ postId }) {
  return (
    <Link href="/node/[id]" as={'/node/' + (postId || 0)}>
      <div className="banner banner_mini">

      </div>
    </Link>
  );
}
