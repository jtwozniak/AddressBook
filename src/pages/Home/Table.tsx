import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { User } from "../../api/user"
import { DetailsModal } from "./DetailsModal"
import { Row } from "./Row"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Tbody = styled.tbody`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  td {
    width: 20%;
  }
`

const StyledTable = styled.table`
  height: 100%;
  width: 1000px;
  align-self: center;
`

type Props = {
  loading: boolean
  noMoreData: boolean
  rows: User[]
  fetchMoreData: () => void
}

export const Table = ({ rows, fetchMoreData, loading, noMoreData }: Props) => {
  const [modalUser, setModalUser] = useState<User>(null)
  const ref = useRef<HTMLTableSectionElement>()

  const checkIfLoadData = useCallback(
    ({ currentTarget: { scrollHeight, scrollTop, clientHeight } }: any) => {
      // for every scrolling event and new rows loading we check if there is more space to load data
      // this is different than specified, seemed to be better fit to the task
      if (!loading && scrollHeight - scrollTop - clientHeight === 0) {
        fetchMoreData()
      }
    },
    [fetchMoreData, loading]
  )

  useEffect(() => {
    checkIfLoadData({ currentTarget: ref.current })
  }, [rows, fetchMoreData])

  return (
    <Div>
      <Div>
        <StyledTable>
          <Tbody ref={ref} onScroll={checkIfLoadData}>
            {rows.map((user) => (
              <Row key={user.cell} {...user} setModalUser={setModalUser} />
            ))}
          </Tbody>
        </StyledTable>
      </Div>
      {!!modalUser && (
        <DetailsModal
          user={modalUser}
          closeModal={() => {
            setModalUser(null)
          }}
        />
      )}
    </Div>
  )
}
