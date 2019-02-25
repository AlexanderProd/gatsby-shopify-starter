import React from 'react'
import { useStaticQuery,  graphql, Link } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'

import { Img } from '../../utils/styles'

const ProductGrid = () => {
  const data = useStaticQuery(
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

  return (
    <Flex flexWrap='wrap' mx={-2}>
      {data.allShopifyProduct.edges.map(x => (
        <Box
        width={[1, 1 / 2, 1 / 3]}
        px={2}
        key={x.node.id}
        >
          <Link to={`/product/${x.node.handle}/`}>
            <Img
              fluid={x.node.images[0].localFile.childImageSharp.fluid}
              alt={x.node.handle}
            />
          </Link>
          <p>{x.node.title}</p>
        </Box>
      ))}
    </Flex>
  )
}

export default ProductGrid
