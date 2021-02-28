import { render } from "@testing-library/react"
import { Home } from "./Home"

jest.mock("../comps/useNationality", () => {
  return jest.fn(() => {
    useNationality: () => "En"
  })
})

describe("Home page tets", () => {
  it("Fetching tests", () => {
    render(<Home>{testMessage}</Home>)
  })
})
