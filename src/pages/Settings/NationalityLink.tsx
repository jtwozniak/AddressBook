import React from "react"
import { Link } from "react-router-dom"
import { useNationality } from "../../comps/useNationality"

type Props = React.PropsWithChildren<{
  to: string
}>

export const getNationalityLink = (nationality: string, to: string) =>
  nationality ? `/${nationality}${to}` : to

export const NationalityLink = ({ to, children }: Props) => {
  const { nationality } = useNationality()
  const link = getNationalityLink(nationality, to)

  return (
    <Link data-testid="link" to={link}>
      {children}
    </Link>
  )
}
