import { Link } from "gatsby";
import * as React from "react";

const AboutPage = () => {
  return (
    <main>
      <title>Learn more</title>
      <Link to="/">Home</Link>
      <h1>What is Pipu</h1>
      <ol>
        <li>One match at a time</li>
        <li>Profile unblurs the more you get to know the other person</li>
        <li>Learn about a persons, Goals, Values, and interests</li>
      </ol>
    </main>
  );
};

export default AboutPage;
