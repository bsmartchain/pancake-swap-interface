import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://t.me/BinanceSmartChainExchange">
        <TranslatedText translationId={2}>Telegram</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://t.me/BinanceSmartChainEx">
        <TranslatedText translationId={4}>ANN</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="/"></StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://binancesmartchain.exchange" className="active">
        <TranslatedText translationId={8}>Exchange</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://t.me/BSCexchangeBot">Claim $100 Bonus</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://bscscan.com/address/0xfc45ad458622e8b04fdb1a675b8747dae7dcb684">
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
