import React from "react"
import { graphql, StaticQuery } from "gatsby"

export default () => (
  <div className="Product-wrapper">
    <StaticQuery
      query={graphql`
        {
          allShopifyProduct {
            edges {
              node {
                id
                title
                handle
                images{
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
      `
      }
      render={data => data.allShopifyProduct.edges.map((x, index) => (
        <>
          {x}
        </>
      ))
      }
    />
  </div>
)