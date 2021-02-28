import React from "react"
import styled from "styled-components"
import { User } from "../api/user"
import { LoadingRow } from "./LoadingRow"
import { Row } from "./Row"

const Div = styled.div`
  width: 100%;
  height: 100%;
`

const Tbody = styled.tbody`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
`

type Props = {
  rows: User[]
  fetchMorData: () => void
}

export const Table = ({ rows, fetchMorData }: Props) => {
  return (
    <Div>
      <StyledTable>
        <Tbody>
          {rows.map((user) => (
            <Row key={user.cell} {...user} />
          ))}
          <LoadingRow key="loading" onVisible={fetchMorData} />
        </Tbody>
      </StyledTable>
    </Div>
  )
}
