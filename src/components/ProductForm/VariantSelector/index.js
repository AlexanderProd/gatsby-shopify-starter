import React from 'react';

const VariantSelector = (props) => {
  const option = props.option
  return (
    <>
      <p>{option.name}</p>
      <select
        className="Product__option"
        name={option.title}
        key={option.id}
        onChange={props.handleOptionChange}
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

export default VariantSelector;
