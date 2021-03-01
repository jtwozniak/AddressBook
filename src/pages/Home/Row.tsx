import React from "react"
import { User } from "../../api/user"

export const Row = (props: User) => {
  return (
    <tr key={props.cell}>
      <td>
        <img src={props.picture} />
      </td>
      <td>{props.name.title}</td>
      <td>{props.name.first}</td>
      <td>{props.name.last}</td>
      <td>{props.email}</td>
    </tr>
  )
}
