import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import { Container, TwoColumnGrid, GridLeft, GridRight } from '~/utils/styles'
import { ProductTitle, ProductDescription } from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  return (
    <>
      <Seo title={product.title} description={product.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            {product.images.map(image => (
              <GatsbyImage
                key={image.id}
                image={image.localFile.childImageSharp.gatsbyImageData}
                alt={image.altText || product.title}
              />
            ))}
          </GridLeft>
          <GridRight>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
      </Container>
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
      description
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
        shopifyId: storefrontId
        selectedOptions {
          name
          value
        }
      }
      priceRangeV2 {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 910
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`

export default ProductPage
