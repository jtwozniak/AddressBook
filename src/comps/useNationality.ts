import { useHistory, useParams } from "react-router-dom"

export const useNationality = () => {
  const { nationality, ...rest } = useParams<{ nationality: string }>()
  const history = useHistory()

  return nationality
}
