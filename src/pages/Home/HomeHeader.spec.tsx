import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { HomeHeader } from "./HomeHeader"

describe("Homeheader", () => {
  const props = {
    page: 1,
    usersCount: 10,
    filteredUsersCount: 5,
    onSearchChange: jest.fn(),
  }

  it("snapshot", () => {
    const { container } = render(<HomeHeader {...props} />)
    expect(container).toMatchSnapshot()
  })

  it("on search change", () => {
    let onSearch = ""
    const onSearchChange = jest.fn((s: string) => {
      onSearch = s
    })

    const rest = { ...props, onSearchChange }
    const { getByLabelText } = render(<HomeHeader {...rest} />)

    const InputText = "TestSearch"
    const input = getByLabelText("search-input")
    fireEvent.change(input, {
      target: { value: InputText },
    })

    expect(onSearchChange).toBeCalledTimes(1)
    expect(onSearch).toBe(InputText)
  })
})
