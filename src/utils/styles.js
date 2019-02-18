import React from 'react'
import Image from 'gatsby-image'

export const Img = props => (
  <Image
    {...props}
    style={{
      maxWidth: `100 %`,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      marginBottom: `1.45rem`,
    }}
  />
)