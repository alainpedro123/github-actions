import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { getByRole } from "@testing-library/dom";

describe("Counter component", () => {
  it("renders without crashing", () => {
    render(<Counter />);
  });

  it("increments count when the increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");

    fireEvent.click(incrementButton);

    const countText = screen.getByText(/Count:/);
    expect(countText).toHaveTextContent("Count: 1");
  });

  it("decrements count when the decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(decrementButton);

    const countText = screen.getByText(/Count:/);
    expect(countText).toHaveTextContent("Count: -1");
  });

  // ... additional tests ...
});

describe("Counter component 2", () => {
  // ... existing tests ...

  it("renders the initial count correctly", () => {
    render(<Counter />);
    const countText = screen.getByText(/Count:/);
    expect(countText).toHaveTextContent("Count: 0");
  });

  it("increments count by 5 when the increment button is clicked 5 times", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");

    for (let i = 0; i < 5; i++) {
      fireEvent.click(incrementButton);
    }

    const countText = screen.getByText(/Count:/);
    expect(countText).toHaveTextContent("Count: 5");
  });

  it("decrements count by 2 when the decrement button is clicked 2 times", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");

    for (let i = 0; i < 2; i++) {
      fireEvent.click(decrementButton);
    }

    const countText = screen.getByText(/Count:/);
    expect(countText).toHaveTextContent("Count: -2");
  });
  /*
  it('displays a message when count is zero', () => {
    render(<Counter />);
    const message = screen.getByText('Count is zero');
    expect(message).toBeInTheDocument();
  });
*/

  it("displays a message when count is zero", () => {
    render(<Counter />);
    const message = getByRole(document.body, "heading", {
      name: "Counter",
    }).nextElementSibling;
    expect(message).toHaveTextContent("Count: 0");
  });

  it("does not display a message when count is not zero", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);

    const message = screen.queryByText("Count is zero");
    expect(message).toBeNull();
  });
});
