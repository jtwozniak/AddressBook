import React, { useCallback, useEffect, useState } from "react"
import { fetchUsers } from "../api/user"
import { PageLayout } from "../comps/PageLayout"
import { Table } from "../comps/Table"
import { useNationality } from "../comps/useNationality"

export const Home = () => {
  const [page, setPage] = useState(0)
  const nationality = useNationality()
  const [users, setUsers] = useState([])

  const getUsers = useCallback(async (nationality: string, page: number) => {
    const newUsers = await fetchUsers(nationality, page)
    setUsers(users.concat(newUsers))
  }, [])

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
