import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  render(<BubblePage isFetchingData={true}/>);


  const value = screen.queryByText(/we are fetching data/i);


  expect(value).toBeInTheDocument();
  expect(value).toBeTruthy();
  expect(value).toHaveTextContent(/we are fetching data/i);
  expect(value).not.toBeNull();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
