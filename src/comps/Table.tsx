import React, {
  UIEventHandler,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react"
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
  const ref = useRef<HTMLTableSectionElement>()

  const checkIfLoadData = useCallback(
    ({ currentTarget: { scrollHeight, scrollTop, clientHeight } }: any) => {
      if (scrollHeight - scrollTop - clientHeight === 0) {
        fetchMorData()
      }
    },
    []
  )

  useLayoutEffect(() => {
    checkIfLoadData({ currentTarget: ref.current })
  }, [rows])
  return (
    <Div>
      <StyledTable>
        <Tbody ref={ref} onScroll={checkIfLoadData}>
          {rows.map((user) => (
            <Row key={user.cell} {...user} />
          ))}
          <LoadingRow key="loading" />
        </Tbody>
      </StyledTable>
    </Div>
  )
}
