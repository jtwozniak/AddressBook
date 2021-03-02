import React from "react"
import { createMemoryHistory } from "history"
import { render } from "@testing-library/react"
import { Router } from "react-router"
import { Settings } from "./Settings"

describe("Settings", () => {
  it("Spage snapshot", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] })
    const Wrapper = ({ children }) => (
      <Router history={history}>{children}</Router>
    )

    const { container } = render(<Settings />, { wrapper: Wrapper })
    expect(container).toMatchSnapshot()
  })
})
