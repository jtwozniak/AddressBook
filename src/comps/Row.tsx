import React from "react"
import { User } from "../api/user"

export const Row = (props: User) => {
  return (
    <tr key={props.cell}>
      <td>{JSON.stringify(props)}</td>
    </tr>
  )
}
