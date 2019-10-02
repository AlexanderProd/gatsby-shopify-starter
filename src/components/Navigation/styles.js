import styled from '@emotion/styled'

export const Wrapper = styled.div({
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
})

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 1.45rem;
  padding-bottom: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
`

export const CartCounter = styled.span({
  backgroundColor: `white`,
  color: `#663399`,
  borderRadius: `20px`,
  padding: `0 10px`,
  fontSize: `1.2rem`,
  float: `right`,
  margin: `-10px`,
  zIndex: 999,
})