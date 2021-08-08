import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const LinkHeader = styled.div`
  /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.5); */
  width: 150px;
  height: 300px;
`;

const CardImage = styled.div`
  background-color: ${(props) => props?.style?.backgroundColor};
  border: 1px solid ${(props) => props?.style?.backgroundColor};
  width: 150px;
  height: 50%;
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
        <CardImage style={{ backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) }} />
        <h2>{title}</h2>
        {props.children}
      </Link>
    </LinkHeader>
  );
}
