import { render } from "@testing-library/react"
import * as React from "react"

import "jest-canvas-mock"

import { ReactExpander } from "../src"

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<ReactExpander height={200}>bla bla</ReactExpander>)
  })
})
