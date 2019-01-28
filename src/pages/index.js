import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductGrid from '../components/productGrid'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <p>Now go build something great.</p>
    <ProductGrid/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
