/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 import { withPrefix } from "gatsby"

 function Seo({ description, lang, title }) {

    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `
      )
 
    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
     >
       <meta name="description" content={metaDescription} />
       <meta property="og:title" content={title} />
       <meta property="og:description" content={metaDescription} />
       <meta property="og:type" content="website" />
       <meta name="twitter:card" content="summary" />
       <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
       <meta name="twitter:title" content={title} />
       <meta name="twitter:description" content={metaDescription} />
 
       <script
         type="application/javascript"
         src={withPrefix("bootstrap.min.js")}
         async
       />
       <script
         type="application/javascript"
         src={withPrefix("rellax.min.js")}
         async
       />
       <script
         type="application/javascript"
         src={withPrefix("project-page.js")}
         async
       />
       <script
         type="application/javascript"
         src={withPrefix("main.js")}
         async
       />
     </Helmet>
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default Seo
 