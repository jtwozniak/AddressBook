import React from "react"
import styled from "styled-components"
import { NationalityLink } from "./NationalityLink"

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 2em;
`

type Props = React.PropsWithChildren<{}>

export const PageLayout = ({ children }: Props) => (
  <MainDiv>
    <HeaderDiv>
      <h1>Address Book</h1>
      <NationalityLink to="/settings">
        <h1>Settings</h1>
      </NationalityLink>
    </HeaderDiv>
    <Main>{children}</Main>
  </MainDiv>
)
