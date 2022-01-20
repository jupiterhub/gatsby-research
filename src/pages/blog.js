import { graphql } from "gatsby";
import * as React from "react";
import Layout from "./layout";
import { title, posted, body } from "./blog.module.css";
import { MDXRenderer } from "gatsby-plugin-mdx";

// data prop is default and passed
const BlogPage = ({ data }) => {
  console.log("data", data);
  return (
    <Layout pageTitle="Stories">
      <p>Read people's experience on using pipu</p>

      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2 className={title}>{node.frontmatter.title}</h2>
            <p className={posted}>Posted: {node.frontmatter.date}</p>
            <div className={body}>
              <MDXRenderer>{node.body}</MDXRenderer>
            </div>
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
        body
      }
    }
  }
`;

export default BlogPage;
