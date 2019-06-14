import React, { useContext } from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import StoreContext from '../../../context/StoreContext'

const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <Flex
      py={2}
      flexWrap='wrap'
      justifyContent='flex-start'
      alignItems='center'
    >
      <Box
        style={{
          paddingRight: '50px'
        }}
      >
        {variantImage}
      </Box>
      <Box>
        <p>
          {line_item.title}
          {`  `}
          {line_item.variant.title === ! 'Default Title' ? line_item.variant.title : ''}
        </p>
      </Box>
      <Box ml='auto'>
        <button onClick={handleRemove}>Remove</button>
      </Box>
    </Flex>
  )
}

export default LineItem
