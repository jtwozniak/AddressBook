import React, { ChangeEventHandler } from "react"
import styled from "styled-components"
import { darkStyle } from "./styleHelper"

const Select = styled.select`
  ${darkStyle}
`

const OptionsMap = {
  0: "All",
  CH: "Swiss",
  ES: "Spanish",
  FR: "French",
  GB: "United Kingdom",
}

type Props = {
  onChange: (n: string) => void
}

export const NationalitySelect = ({ onChange }: Props) => {
  return (
    <Select
      name="Nationality"
      id="nationality"
      onChange={({
        currentTarget: { value },
      }: React.SyntheticEvent<HTMLSelectElement>) => onChange(value)}
    >
      {Object.entries(OptionsMap).map(([symbol, nationality]) => (
        <option key={symbol} value={symbol}>
          {nationality}
        </option>
      ))}
    </Select>
  )
}
