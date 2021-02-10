import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.nav`
  background: #fffbf0; 
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

export const AppLogo = styled.img`
  height: 50px;
  width: 50px;
`

export const MenuLink = styled(Link)`
  color: #441d0c;
  display: flex;
  aligin-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%
  cursor: pointer;
`

export const CartCounter = styled.span`
  background-color: white;
  color: #441d0c;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #441d0c;

  @media screen and (max-width: ${breakpoints.m}px) {
    display: block;
    postion: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem
    cursor: pointer;
  }
`

export const CartBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

export const CartBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ebd9c3;
  padding: 10px 22px;
  color: #441d0c;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fffbf0;
    color: #9ad3c2;
  }
`