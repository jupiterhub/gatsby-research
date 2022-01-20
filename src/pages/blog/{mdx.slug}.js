import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../layout";
import { title, posted, body, credit } from "./index.module.css";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle="Stories">
      <p>Read people's experience on using pipu</p>

      <ul>
        <article key={data.mdx.id}>
          <h2 className={title}>{data.mdx.frontmatter.title}</h2>
          <p className={posted}>Posted: {data.mdx.frontmatter.date}</p>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            <span className={credit}>Photo Credit:</span>
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
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
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
