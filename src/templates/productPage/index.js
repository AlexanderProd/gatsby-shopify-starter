import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Layout>
      <div
        style={{
          display: `grid`,
          'grid-template-columns': `repeat(12, 1fr)`,
          'grid-template-rows': `100% 100% 100%`,
        }}
      >
        <div
          style={{
            'grid-column': `span 6`,
          }}
        >
          {product.images.map(x => (
            <img src={x.originalSrc} key={x.id}/>
          ))}
        </div>
        <div
          style={{
            'grid-column': `span 6`,
          }}
        >
          <h1>{product.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}/>
        </div>
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
      variants {
        id
        title
        price
      }
      images{
        originalSrc
        id
      }
    }
  }
`