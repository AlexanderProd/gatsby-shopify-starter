import React from 'react'
import { useStaticQuery,  graphql, Link } from 'gatsby'

import {
  Grid,
  Product,
  Title,
  PriceTag
} from './styles'
import { Img } from '../../utils/styles'

const ProductGrid = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
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
  
  const Products = allShopifyProduct.edges
    ? allShopifyProduct.edges.map(i => (
      <Product key={i.node.id} >
        <Link to={`/product/${i.node.handle}/`}>
          <Img
            fluid={i.node.images[0].localFile.childImageSharp.fluid}
            alt={i.node.handle}
          />
        </Link>
        <Title>{i.node.title}</Title>
        <PriceTag>{i.node.variants[0].price} €</PriceTag>
      </Product>
    ))
    : <p>No Products found!</p>

  return (
    <Grid>
      {Products}
    </Grid>
  )
}

export default ProductGrid
