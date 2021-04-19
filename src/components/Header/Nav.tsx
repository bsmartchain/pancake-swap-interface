import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://backup.finance">
        <TranslatedText translationId={2}>ғᴀʀмᴇʀs</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://bscscan.com/address/0xb594eb091b1cc711879ce5379f5fd06c4b028833#code">
        <TranslatedText translationId={4}>мᴀsтᴇʀcнᴇғ</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="/"></StyledAbsoluteLink>
      <StyledAbsoluteLink href="/" className="active">
        <TranslatedText translationId={8}>ᴇxcнᴀɴԍᴇ</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://bscscan.com/address/0x48e15abbcb21c7f564c1b5ae08a9f7829745f6d7">ʙᴀcκuᴘ coɴтʀᴀcт</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://bscscan.com/address/0x0e6ef701e9cef56a516c2e10ad093be351b6c90f">
        <TranslatedText translationId={14}>suɴsнιᴇ coɴтʀᴀcт</TranslatedText>
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
