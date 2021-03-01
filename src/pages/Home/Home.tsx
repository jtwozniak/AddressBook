import React, { useCallback, useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { fetchUsers, User } from "../../api/user"
import { PageLayout } from "../../comps/PageLayout"
import { Table } from "./Table"
import { useNationality } from "../../comps/useNationality"
import { HomeHeader } from "./HomeHeader"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const DivH3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;

  h3 {
    margin-right: 2em;
  }
`

export const Home = () => {
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [noMoreData, setNoMoreData] = useState(false)
  const [filterString, setFilterString] = useState("")
  const nationality = useNationality()
  const [users, setUsers] = useState([])
  // prefetchedUsers users store next batch users that are merged to users
  // in the same time as new fetch will start
  const [prefetchedUsers, setPrefetchedUsers] = useState([])

  const getUsers = useCallback(
    async (nationality: string, page: number) => {
      if (!loading && !noMoreData) {
        setLoading(true)
        setPage(page)
        setUsers(users.concat(prefetchedUsers))
        const newUsers = await fetchUsers(nationality, page)
        setPrefetchedUsers(newUsers)

        if (!newUsers.length) {
          setNoMoreData(true)
        } else {
        }
        setLoading(false)
      }
    },
    [loading, noMoreData]
  )

  const fetchMoreData = useCallback(async () => {
    getUsers(nationality, page + 1)
  }, [getUsers, page])

  const filteredUsers = useMemo(() => {
    // I wrote different search method then descibed in spec
    // I choose a little bit more advanced approach
    // as the it seemed to nicer to write and more effective
    const filters = filterString.split(" ")
    return users.filter(({ name: { last, first, title }, email }: User) => {
      const userWords = [last, first, title, email]
      return filters.every((filter) =>
        userWords.some((word) => word.includes(filter))
      )
    })
  }, [users, filterString])

  return (
    <PageLayout>
      <Div>
        <HomeHeader
          page={page - 1}
          usersCount={users.length}
          filteredUsersCount={filteredUsers.length}
          onSearchChange={setFilterString}
        />
        <Table
          rows={filteredUsers}
          fetchMoreData={fetchMoreData}
          loading={loading}
        />
      </Div>
    </PageLayout>
  )
}
