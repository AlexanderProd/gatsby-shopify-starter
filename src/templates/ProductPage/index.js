import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'

import ProductForm from '../../components/ProductForm'
import { Img } from '../../utils/styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Flex flexWrap='wrap'>
      <Box pr={[null, 3]} width={[1, 1/2]}>
        {product.images.map(x => (
          <Img
            fluid={x.localFile.childImageSharp.fluid}
            key={x.id}
            alt={product.title}
          />
        ))}
      </Box>
      <Box width={[1, 1/2]}>
        <h1>{product.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <ProductForm product={product} />
      </Box>
    </Flex >
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
      shopifyId
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
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
