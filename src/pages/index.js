import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "./layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="home">
      <title>Home Page</title>
      <h1>Welcome to Pipu!</h1>
      <p>Humanizing dating apps.</p>
      <StaticImage
        alt="I am a cute Kat"
        src="https://placekitten.com/g/800/900"
      />
    </Layout>
  );
};

export default IndexPage;
