import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'

const ProductGrid = () => (
  <Flex flexWrap='wrap' mx={-2}>
    <StaticQuery
      query={graphql`
        {
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
                }
                variants {
                  price
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.allShopifyProduct.edges.map(x => (
          <Box 
            width={[1, 1 / 2, 1 / 3]} 
            px={2} 
            key={x.node.id}
          >
            <Link to={`/product/${x.node.handle}/`}>
              <img src={x.node.images[0].originalSrc} alt={x.node.handle} />
            </Link>
            <p>{x.node.title}</p>
          </Box>
        ))
      }
    />
  </Flex>
)

export default ProductGrid
