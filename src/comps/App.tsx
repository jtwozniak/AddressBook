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
    height: 100vh;
    width: 100vh;
    overflow: hidden;
  }
  a {
    color: white;
  }
  thead, 
  tbody { 
    display: block; 
  }
`

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Router />
  </BrowserRouter>
)
