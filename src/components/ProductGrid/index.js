import React, { useContext } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Grid, Product, Title, PriceTag } from './styles'

const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
              featuredImage {
                altText
                id
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges ? (
        allShopifyProduct.edges.map(
          ({
            node: {
              id,
              handle,
              title,
              featuredImage,
              variants: [firstVariant],
            },
          }) => (
            <Product key={id}>
              <Link to={`/product/${handle}/`}>
                {featuredImage && (
                  <GatsbyImage
                    key={featuredImage.id}
                    image={
                      featuredImage.localFile.childImageSharp.gatsbyImageData
                    }
                    alt={featuredImage.altText || handle}
                    style={{ height: '100%' }}
                  />
                )}
              </Link>
              <Title>{title}</Title>
              <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
            </Product>
          )
        )
      ) : (
        <p>No Products found!</p>
      )}
    </Grid>
  )
}

export default ProductGrid
