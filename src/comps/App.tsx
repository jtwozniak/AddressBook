import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { normalize } from "polished"
import { NationalityLink } from "./NationalityLink"
import { Router } from "./Router"

const GlobalStyle = createGlobalStyle`
 ${normalize()}
  body {
    background-image: url("/public/background.png") ;
    background-size: cover;
    color: white;
    padding: 0 2em;
  }
  a {
    color: white;
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
    <Router />
  </BrowserRouter>
)
