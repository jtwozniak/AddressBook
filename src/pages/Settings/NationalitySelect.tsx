import React, { ChangeEventHandler } from "react"
import styled from "styled-components"
import { darkStyle } from "../../comps/styleHelper"

const Select = styled.select`
  ${darkStyle}
`

export const OptionsMap = {
  All: "All",
  CH: "Swiss",
  ES: "Spanish",
  FR: "French",
  GB: "United Kingdom",
}

type Props = {
  value: string
  onChange: (n: string) => void
}

export const NationalitySelect = ({ value, onChange }: Props) => (
  <Select
    name="Nationality"
    id="nationality"
    value={value}
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
