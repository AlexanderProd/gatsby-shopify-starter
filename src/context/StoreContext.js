import React from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'graphql.myshopify.com',
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38'
});

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => { },
  removeLineItem: () => { },
  updateLineItem: () => { }
};

const StoreContext = React.createContext(defaultStoreContext);

export default StoreContext;