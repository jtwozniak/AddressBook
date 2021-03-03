import React from "react"
import { act, fireEvent, render } from "@testing-library/react"
import { User } from "../../api/user"
import { Row } from "./Row"
// for some reason setupFilesAfterEnv didn't import it automatically
// I could create separate file for that but that is not worth it, at least not for one test
import "jest-styled-components"

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
    const { container, getByTestId } = render(
      <Row setModalUser={jest.fn()} {...user} />,
      {
        wrapper: ({ children }) => (
          <table>
            <tbody>{children}</tbody>
          </table>
        ),
      }
    )

    expect(container.firstChild).toMatchSnapshot()

    const rowComponent = getByTestId("row")
    // toHaveStyleRule comes from jest-styled-components
    expect(rowComponent).toHaveStyleRule("opacity", "0.6")

    act(() => {
      fireEvent.mouseOver(rowComponent)
    })

    expect(rowComponent).toHaveStyleRule("opacity", "1")
  })
})
