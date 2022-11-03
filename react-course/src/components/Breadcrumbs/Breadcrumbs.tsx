import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }: { crumbs: { name: string; path: string }[] }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <div>
      {/* Link back to any previous steps of the breadcrumb. */}
      {crumbs.map(({ name, path }, key: number) =>
        key + 1 === crumbs.length ? (
          <span key={key}>{name}</span>
        ) : (
          <>
            <Link key={key} to={path}>
              {name}
            </Link>
            <span> &gt; </span>
          </>
        )
      )}
    </div>
  );
};
export default Breadcrumbs;
