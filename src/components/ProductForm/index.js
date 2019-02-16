import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector'

const ProductForm = props => {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(props.product.variants[0])
  const context = useContext(StoreContext)

  const { variants } = props.product
  const hasVariants = variants.length > 1
  const productVariant =
    context.client.product.helpers.variantForOptions(props.product, variant) ||
    variant
  const isOutOfStock = !productVariant.availableForSale

  useEffect(() => {
    let defaultOptionValues = {}
    props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])
 
  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  const handleOptionChange = event => {
    const { target } = event
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity)
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
      <h3>${productVariant.price}</h3>
      {variantSelectors}
      <label htmlFor="quantity">Quantity </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />
      <br/>
      <button type="submit" disabled={isOutOfStock} onClick={handleAddToCart}>
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
    shopifyId: PropTypes.string,
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
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
