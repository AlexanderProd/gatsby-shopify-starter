import React, { Component } from 'react';

import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    /* let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this); */
  }

  handleOptionChange(event) {
    /* const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    }); */
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
        {<StoreContext.Consumer>
          {({ test, client }) => {
            console.log(client)
            return(<p>{test}</p>)
          }}
        </StoreContext.Consumer>}
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
