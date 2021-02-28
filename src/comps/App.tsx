import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { BrowserRouter, Link } from "react-router-dom"
import { normalize } from "polished"
import { Router } from "./Router"

const GlobalStyle = createGlobalStyle`
 ${normalize()}
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

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <HeaderDiv>
      <h1>Address Book</h1>
      <Link to="/settings">
        <h1>Settings</h1>
      </Link>
    </HeaderDiv>
    <main>
      <Router />
    </main>
  </BrowserRouter>
)
