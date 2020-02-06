module.exports = [
  {
    query: `
      query {
        products: allShopifyProduct {
          edges {
            node {
              id
              handle
              productType
              publishedAt(formatString: "YYYY-MM-DD HH:mm:ss")
              shopifyId
              tags
              title
              updatedAt(formatString: "YYYY-MM-DD HH:mm:ss")
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      base64
                    }
                  }
                }
              }
              variants {
                id
                availableForSale
                compareAtPrice
                price
                selectedOptions {
                  name
                  value
                }
                sku
                title
                weight
                weightUnit
              }
              vendor
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              description
              availableForSale
            }
          }
        }
      }
    `,
    transformer: ({ data }) => data.products.edges.map(({ node }) => node),
  },
]
