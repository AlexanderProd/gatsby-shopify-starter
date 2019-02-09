import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector'

const ProductForm = props => {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(props.product.variants[0])
  const context = useContext(StoreContext)

  const { variants } = props.product
  const hasVariants = variants.length > 1
  const isOutOfStock = !hasVariants && !variants[0].availableForSale
  // const variant = /* this.state.selectedVariant || */ variants[0]
  // const variantQuantity = this.state.quantity || 1
  
  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }
  
  const handleOptionChange = event => {
    const { target } = event
    setVariant({
      ...variant,
      [target.name]: target.value,
    })
    console.log(variant)
  }
  
  const handleSubmit = () => {
    console.log(context.client.product.helpers.variantForOptions(props.product, {
      Color: "Brown",
      Size: "7",
    }))
  }

  const variantSelectors = hasVariants
    ? props.product.options.map(option => {
        return (
          <VariantSelector
            onChange={handleOptionChange}
            key={option.id.toString()}
            option={option}
          />
        )
      })
    : null
  
  return (
    <>
      <span className="Product__price">${variant.price}</span>
      {variantSelectors}
      <label htmlFor="quantity">Qty.</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />
      <button
        type="submit"
        className="Product__buy button"
        disabled={isOutOfStock}
        onClick={handleSubmit}
      >
        Add to Cart
      </button>
      {isOutOfStock && <p>This Product is out of Stock!</p>}
    </>
  )
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
        selectedOptions: PropTypes.shape({
          name: PropTypes.string,
          value: PropTypes.string,
        })
      }),
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
