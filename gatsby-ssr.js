/**
import { withPrefix } from 'gatsby';
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://cdn.rawgit.com/tonystar/bootstrap-hover-tabs/v3.1.1/bootstrap-hover-tabs.js"
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://widget.clutch.co/static/js/widget.js"
      defer
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://assets.goodfirms.co/assets/js/widget.min.js"
      defer
    ></script>
  ])
}
