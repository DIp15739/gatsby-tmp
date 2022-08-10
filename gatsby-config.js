module.exports = {
  siteMetadata: {
    title: `gatsby-test-title`,
    description: `gatsby-test-description`,
    author: `dv`,
    siteUrl: "http://gatsby-wp-test.infinityfreeapp.com",
  },
  plugins: [
    {
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://gatsby-wp-test.infinityfreeapp.com/graphql"
    }
  },
  "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "xxxx"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};