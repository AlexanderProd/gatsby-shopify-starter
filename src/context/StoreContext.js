import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'graphql.myshopify.com',
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38'
});

/* const defaultContextValue = {
  client,
  data: {
    // set your initial data shape here
    menuOpen: false,
  },
  test: '12345',
  set: () => { },
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProviderComponent } */

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => { },
  removeLineItem: () => { },
  updateLineItem: () => { },
  test: 'jooooo',
};

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext