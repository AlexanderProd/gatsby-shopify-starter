import React, { Component } from 'react';

import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector';

class ProductForm extends Component {
  constructor(props) {
    super(props);

  }

  handleOptionChange(event) {
    
  }

  handleQuantityChange(event) {
    
  }

  render() {
    let variant = /* this.state.selectedVariant || */ this.props.product.variants[0]
    let variantQuantity = /* this.state.selectedVariantQuantity || */ 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
    return (
      <>
        <span className="Product__price">${variant.price}</span>
        {variantSelectors}
        <label className="Product__option">
          Quantity
          <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
        </label>
        <button className="Product__buy button" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
      </>
    );
  }
}

export default ProductForm;
