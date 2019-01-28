import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

export default ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Layout>
      <div>
        <h1>{product.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      descriptionHtml
      vendor
      variants {
        id
        title
        price
      }
    }
  }
`