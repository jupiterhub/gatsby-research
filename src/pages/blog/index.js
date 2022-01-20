import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../layout";

// data prop is default and passed
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Stories">
      <p>Read people's experience on using pipu</p>

      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const mdxQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
