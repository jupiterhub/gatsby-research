module.exports = {
  siteMetadata: {
    title: `Gatsby App`,
    description: "evaluating gatsby",
    siteUrl: `https://www.gatsby-reasearch.com`,
    customProperty: "will graphQL data be able to catch this",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
