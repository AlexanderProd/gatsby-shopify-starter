import React from 'react'
import { graphql } from 'gatsby'

import ProductForm from '../../components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '../../utils/styles'
import {
  ProductTitle,
  ProductDescription
} from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Container>
      <TwoColumnGrid>
        <GridLeft>
          {product.images.map(x => (
            <Img
              fluid={x.localFile.childImageSharp.fluid}
              key={x.id}
              alt={product.title}
            />
          ))}
        </GridLeft>
        <GridRight>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductForm product={product} />
          <ProductDescription
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
        </GridRight>
      </TwoColumnGrid>
    </Container>
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
