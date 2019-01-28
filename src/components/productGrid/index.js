import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import style from './style.module.css'

export default () => (
  <div className={style.productWrapper}>
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
      render={data => data.allShopifyProduct.edges.map(x => (
        <div className={style.product} key={x.node.id}>
          <Link to={`/`+x.node.handle+`/`}>
            <img src={x.node.images[0].originalSrc} alt={x.node.handle}/>
          </Link>
          <p>{x.node.title}</p>
        </div>
      ))
      }
    />
  </div>
)