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
    transformer: ({ data }) => {
      return data.products.edges.map(({ node }) => {
        return {
          ...node,
          images: [node.images[0]],
        }
      })
    },
  },
]
