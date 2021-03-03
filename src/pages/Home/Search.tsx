import React from "react"
import styled from "styled-components"

const Input = styled.input`
  margin: 0 1em;
  width: 250px;
  background-color: #042653;
  color: white;
  border-radius: 3px;
  border-color: red;
  height: 35px;

  :focus {
    border-color: red;
    box-shadow: 0 0 20px red;
    outline: none;
  }
`

type Props = {
  onChange: (s: string) => void
}

export const Search = ({ onChange }: Props) => {
  return (
    <span>
      <h3>Search:</h3>
      <Input
        type="search"
        aria-label="search-input"
        data-testid="search-input"
        onChange={({
          currentTarget: { value },
        }: React.SyntheticEvent<HTMLInputElement>) => {
          onChange(value)
        }}
      />
    </span>
  )
}
