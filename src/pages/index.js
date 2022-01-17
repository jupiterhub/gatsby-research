import { Link } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to Pipu!</h1>
      <p>Humanizing dating apps.</p>
      <Link to="about">Learn More</Link>
    </main>
  );
};

export default IndexPage;
