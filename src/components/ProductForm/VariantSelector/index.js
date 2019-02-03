import React from 'react';
import PropTypes from 'prop-types'

const VariantSelector = (props) => {
  const { option } = props
  return (
    <>
      <p>{option.name}</p>
      <select
        className="Product__option"
        name={option.name}
        key={option.id}
        onChange={props.onChange}
      >
        {option.values.map((value) => {
          return (
            <option value={value} key={`${option.name}-${value}`}>{`${value}`}</option>
          )
        })}
      </select>
    </>
  );
}

VariantSelector.propTypes = {
  onChange: PropTypes.func,
  option: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  })
}

export default VariantSelector;
