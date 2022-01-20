import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../layout";
import { title, posted, body } from "./index.module.css";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle="Stories">
      <p>Read people's experience on using pipu</p>

      <ul>
        <article key={data.mdx.id}>
          <h2 className={title}>{data.mdx.frontmatter.title}</h2>
          <p className={posted}>Posted: {data.mdx.frontmatter.date}</p>
          <div className={body}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </article>
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
