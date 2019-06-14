import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled-base'
import { Global, css } from "@emotion/core"
import { Flex } from '@rebass/grid/emotion'

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
      }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)

export const Img = styled(Image)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

export const Container = props => (
  <Flex
    {...props}
    mx='auto'
    flexDirection='column'
    px={[`1.0875rem`, null, null, 0]}
    py='1.45rem'
    css={{
      margin: `0 auto`,
      maxWidth: 960,
    }}
  />
)
