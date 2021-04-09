import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const LinkHeader = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`;

interface ILinkCard {
  to: string;
  title: string;
}

export function LinkCard(linkData: ILinkCard, { ...props }) {
  const { to, title } = linkData;

  return (
    <LinkHeader className="link-card">
      <Link to={to}>
        <h1>{title}</h1>
        {props.children}
      </Link>
    </LinkHeader>
  );
}
