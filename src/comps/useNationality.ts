import { useHistory, useParams } from "react-router-dom"

export const useNationality = () => {
  const { nationality, ...rest } = useParams<{ nationality: string }>()
  const history = useHistory()

  console.log("Params", nationality, rest, history.location)
  return nationality
}