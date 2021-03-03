import React from "react"
import { act, fireEvent, render } from "@testing-library/react"
import { User } from "../../api/user"
import { Row } from "./Row"

const user: User = {
  picture: "thumbnail",
  name: { title: "title", first: "first", last: "last" },
  email: "string",
  location: {
    street: {
      name: "name",
      number: 1,
    },
    city: "city",
    state: "state",
    postcode: 90210,
  },
  phone: "phone",
  cell: "cell",
}

describe("Row", () => {
  it("hover style test", () => {
    const { container } = render(<Row {...user} />)

    expect(container).toMatchSnapshot()

    // expect(container).toHaveStyle()
    //
    // act(() => {
    //   fireEvent.container.
    // })
  })
})
