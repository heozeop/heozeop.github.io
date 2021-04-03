import { Link } from 'gatsby';
import React from 'react';

interface ILinkCard {
  to: string;
  title: string;
}

export function LinkCard(linkData: ILinkCard, { ...props }) {
  const { to, title } = linkData;

  return (
    <div className="link-card">
      <Link to={to}>
        <h1>{title}</h1>
        {props.children}
      </Link>
    </div>
  );
}
