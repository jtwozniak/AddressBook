import React from "react"
import styled from "styled-components"
import { NationalityLink } from "./NationalityLink"

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

type Props = React.PropsWithChildren<{}>

export const PageLayout = ({ children }: Props) => (
  <>
    <HeaderDiv>
      <h1>Address Book</h1>
      <NationalityLink to="/settings">
        <h1>Settings</h1>
      </NationalityLink>
    </HeaderDiv>
    <main>{children}</main>
  </>
)
