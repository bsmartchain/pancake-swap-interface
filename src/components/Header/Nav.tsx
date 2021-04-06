import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://mallsbase.finance">
        <TranslatedText translationId={2}>Farm</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://mallsbase.finance/staking">
        <TranslatedText translationId={4}>Staking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="/"></StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://exchange.mallsbase.finance" className="active">
        <TranslatedText translationId={8}>Trade</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.info">Analytics</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://bscscan.com/address/0x3dfac6b77a065788cb24eaf205b1ca465c48c4e1">
        <TranslatedText translationId={14}>Contract</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #12aab5;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #452a7a;
  }
  &.active {
    color: #452a7a;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
