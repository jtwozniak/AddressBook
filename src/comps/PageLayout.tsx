import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

const GlobalStyle = createGlobalStyle`
 {normalize()}
  body {
    background-image: url("public/background.png") ;
    background-size: cover;
    color: white;
    padding: 0 2em;
  }
`

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PageLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <GlobalStyle />
      <HeaderDiv>
        <h1>Address Book</h1>
        <h1>Settings</h1>
      </HeaderDiv>
      <main>{children}</main>
    </>
  )
}
