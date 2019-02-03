import React from 'react'
import PropTypes from 'prop-types'

import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector'

class ProductForm extends React.Component {
  state = {
    variant:
      this.props.product.variants.length === 1
        ? this.props.product.variants[0].shopifyId
        : '',
    quantity: 1,
    errors: [],
  }

  handleChange = event => {
    event.preventDefault()

    if (event.target.value) {
      const errors = this.state.errors

      const errorIdx = errors.findIndex(
        error => error.field === event.target.name
      )

      errors.splice(errorIdx, 1)

      if (~errorIdx) {
        this.setState({ errors: errors })
      }
    }

    console.log(event.target.name, event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = callback => event => {
    event.preventDefault()

    const errors = []

    if (this.state.quantity < 1) {
      errors.push({
        field: 'quantity',
        msg: 'Choose a <b>quantity</b> of 1 or more.',
      })
    }

    if (this.state.variant === '' || this.state.variant === '.') {
      errors.push({
        field: 'variant',
        msg: 'Please select a <b>size</b>.',
      })
    }

    if (errors.length) {
      this.setState({ errors: errors })
      return
    }

    callback(this.state.variant, this.state.quantity)
  }

  render() {
    const { variants } = this.props.product
    const hasVariants = variants.length > 1
    const isOutOfStock = !hasVariants && !variants[0].availableForSale
    const variant = /* this.state.selectedVariant || */ variants[0]
    // const variantQuantity = this.state.quantity || 1

    const variantSelectors = hasVariants
      ? this.props.product.options.map(option => {
          return (
            <VariantSelector
              onChange={this.handleChange}
              key={option.id.toString()}
              option={option}
            />
          )
        })
      : null

    return (
      <StoreContext.Consumer>
        {({ addVariantToCart }) => (
          <form onSubmit={this.handleSubmit(addVariantToCart)} noValidate>
            <span className="Product__price">${variant.price}</span>
            {variantSelectors}
            <label htmlFor="quantity">Qty.</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              step="1"
              onChange={this.handleChange}
              value={this.state.quantity}
            />
            <button
              type="submit"
              className="Product__buy button"
              disabled={isOutOfStock}
            >
              Add to Cart
            </button>
            {isOutOfStock && <p>This Product is out of Stock!</p>}
          </form>
        )}
      </StoreContext.Consumer>
    )
  }
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
