import React from 'react'
import { graphql } from 'gatsby'

import ProductForm from '../../components/ProductForm'

export default ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
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
            <img src={x.originalSrc} key={x.id} alt={product.title} />
          ))}
        </div>
        <div
          style={{
            'grid-column': `span 6`,
          }}
        >
          <h1>{product.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <ProductForm product={product} />
        </div>
      </div>
    </>
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
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions{
          name
          value
        }
      }
      images {
        originalSrc
        id
      }
    }
  }
`
