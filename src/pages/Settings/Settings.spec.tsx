import React from "react"
import { act, fireEvent } from "@testing-library/react"
import { renderWithRouter } from "../../testUtils/renderWithRouter"
import { Settings } from "./Settings"

// we don't have main router setup so useParams will not extract url params
// so we mock useParams accordingly
jest.mock("../../comps/useNationality", () => ({
  useNationality: () => ({
    nationality: "GB",
  }),
}))

describe("Settings", () => {
  it("Page snapshot", () => {
    const { container, history } = renderWithRouter(<Settings />)
    expect(container).toMatchSnapshot()
    expect(history.location.pathname).toStrictEqual("/")
  })

  it("Nationality settings are applied in pathname", () => {
    const { history, getByTestId } = renderWithRouter(<Settings />, {
      route: "/settings",
    })

    act(() => {
      fireEvent.change(getByTestId("nationality-select"), {
        target: { value: "CH" },
      })
    })

    expect(history.location.pathname).toStrictEqual("/settings")

    act(() => {
      getByTestId("apply-button").click()
    })
    expect(history.location.pathname).toStrictEqual("/CH/settings")
  })

  it("Nationality settings are used in home path", () => {
    const { history, getByTestId, getByText } = renderWithRouter(<Settings />, {
      route: "/settings",
    })

    act(() => {
      fireEvent.change(getByTestId("nationality-select"), {
        target: { value: "GB" },
      })
    })

    act(() => {
      getByTestId("apply-button").click()
    })

    act(() => {
      getByText("Back to main page").click()
    })

    expect(history.location.pathname).toStrictEqual("/GB/")
  })
})
