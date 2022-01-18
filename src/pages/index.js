import { Link } from "gatsby";
import * as React from "react";
import Layout from "./layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="home">
      <title>Home Page</title>
      <h1>Welcome to Pipu!</h1>
      <p>Humanizing dating apps.</p>
    </Layout>
  );
};

export default IndexPage;
