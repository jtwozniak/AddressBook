import { useParams } from "react-router-dom"

export const useNationality = () => {
  const { nationality, ...rest } = useParams<{ nationality: string }>()

  console.log("Params", nationality, rest)
  return nationality
}
