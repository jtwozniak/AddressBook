import React, { useState } from "react"
import styled from "styled-components"
import { User } from "../../api/user"

const Tr = styled.tr<{
  // $ sing in styled-components means to not pass prop to dom
  // https://styled-components.com/docs/api#transient-props
  $mouseOver: boolean
}>`
  cursor: pointer;
  opacity: ${({ $mouseOver }) => ($mouseOver ? 1 : 0.6)};
`

type Props = User & {
  setModalUser: (u: User) => void
}

export const Row = ({ setModalUser, ...user }: Props) => {
  const [mouseOver, setMouseOver] = useState(false)

  return (
    <Tr
      data-testid="row"
      key={user.cell}
      $mouseOver={mouseOver}
      onMouseOver={() => {
        if (!mouseOver) setMouseOver(true)
      }}
      onMouseLeave={() => {
        if (mouseOver) setMouseOver(false)
      }}
      onClick={() => {
        setModalUser(user)
      }}
    >
      <td>
        <img src={user.picture} />
      </td>
      <td>{user.name.title}</td>
      <td>{user.name.first}</td>
      <td>{user.name.last}</td>
      <td>{user.email}</td>
    </Tr>
  )
}
