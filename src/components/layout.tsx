import React, { ReactNode } from 'react';
import { Link, PageRendererProps } from 'gatsby';

interface LayoutTypes extends PageRendererProps {
  title: string;
  children: ReactNode;
}

function Layout({ location, title, children }: LayoutTypes): JSX.Element {
  // const rootPath = `${__PATH_PREFIX__}/`
  const rootPath = '/';
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
}

export default Layout;
