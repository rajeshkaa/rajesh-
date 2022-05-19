// import React from "react"

import {screen,render,cleanup} from "@testing-library/react"

import Todo from "../todo"

test("should render to do component",()=>{
    render(<Todo/>)
    const tt=screen.getByTestId("todo-1")
    expect(tt).toBeInTheDocument()
})