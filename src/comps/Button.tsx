import React from "react"
import styled from "styled-components"
import { darkStyle } from "./styleHelper"

const StyledButton = styled.button`
  ${darkStyle}
`

type Props = React.PropsWithChildren<{
  onChange: () => void
}>

export const Button = ({ children, onChange }: Props) => (
  <StyledButton type="button" onClick={onChange}>
    {children}
  </StyledButton>
)
