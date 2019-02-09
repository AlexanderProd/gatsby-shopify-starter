import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: `${process.env.SHOPNAME}.myshopify.com`,
  storefrontAccessToken: process.env.ACCESSTOKEN,
})

export const defaultStoreContext = {
  client,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  test: 'jooooo',
}

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext
