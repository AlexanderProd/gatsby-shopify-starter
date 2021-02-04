import React from 'react';
// import { Link } from 'gatsby'
import Helmet from 'react-helmet';

import SEO from '~/components/seo';
import ProductGrid from '~/components/ProductGrid';

const IndexPage = () => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Helmet>
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <ProductGrid />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
