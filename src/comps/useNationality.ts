import { useParams } from "react-router-dom"

export const useNationality = () => useParams<{ nationality: string }>()
