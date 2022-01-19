import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  siteDescription,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          customProperty
        }
      }
    }
  `);

  console.log(data);
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <div className={siteDescription}>
        {data.site.siteMetadata.description}
      </div>

      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkItem}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkItem}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
