import React, { useCallback, useEffect, useState } from "react"
import { fetchUsers } from "../api/user"
import { PageLayout } from "../comps/PageLayout"
import { Table } from "../comps/Table"
import { useNationality } from "../comps/useNationality"

export const Home = () => {
  // download first 50 phone book people
  // download second 50 when
  // add lading state
  // add search input
  const [page, setPage] = useState(0)
  const nationality = useNationality()
  const [users, setUsers] = useState([])

  const getUsers = useCallback(async (nationality: string, page: number) => {
    const users = await fetchUsers(nationality, page)
    setUsers(users)
  }, [])

  useEffect(() => {
    setPage(0)
    getUsers(nationality, page)
  }, [nationality])

  useEffect(() => {
    getUsers(nationality, page)
  }, [page])

  const fetchMoreData = useCallback(() => setPage(page + 1), [page])

  return (
    <PageLayout>
      <Table rows={users} fetchMorData={fetchMoreData} />
    </PageLayout>
  )
}
