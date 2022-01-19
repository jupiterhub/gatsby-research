import { graphql } from "gatsby";
import * as React from "react";
import Layout from "./layout";

// data prop is default and passed
const BlogPage = ({ data }) => {
  console.log("data", data);
  return (
    <Layout pageTitle="Stories">
      <p>Read people's experience on using pipu</p>

      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>
            <a href="#">{node.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

// pageQuery. (not a useStaticQuery)
// exporting a query will automatically be handled by the framework, and data will be passed
export const blogQuery = graphql`
  query {
    allFile {
      nodes {
        relativePath
        name
      }
    }
  }
`;
export default BlogPage;
