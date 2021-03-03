import React from "react"
import styled from "styled-components"
import { Search } from "./Search"

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  justify-content: space-between;
  padding-bottom: 2em;

  align-self: center;

  h3 {
    display: inline-block;
    margin: 0 1em;
  }
`

type Props = {
  page: number
  usersCount: number
  filteredUsersCount: number
  onSearchChange: (v: string) => void
}

// Search bar + some extra stats to see what is the state fetched data
export const HomeHeader = ({
  page,
  usersCount,
  onSearchChange,
  filteredUsersCount,
}: Props) => {
  return (
    <MainDiv>
      <Search onChange={onSearchChange} />

      <Div>
        <h3>Filtered users: {filteredUsersCount}</h3>
        <h3>Fetched users: {usersCount}</h3>
        <h3>Pages: {page}</h3>
      </Div>
    </MainDiv>
  )
}
