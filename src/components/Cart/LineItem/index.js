import React, { useContext } from 'react'

import StoreContext from '../../../context/StoreContext'

const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props

  const variantImage = line_item.variant.image
    ? <img
        src={line_item.variant.image.src}
        alt={`${line_item.title} product shot`}
        height='50px'
      />
    : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <li>
      <p>{line_item.title} {line_item.variant.title}</p>
      {variantImage}
      <button
        onClick={handleRemove}
      >
        Remove
      </button>
    </li>
  )
}

export default LineItem