import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import InputDate from "./index";

class TestInput extends React.Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <InputDate
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);

  return {
    container,
    wrapper,
    input,
  };
};

// TESTING RULES

test("Should have wrapper with className .form-control", () => {
  // ambil input dari setup
  const { wrapper } = setup();
  expect(wrapper).toBeInTheDocument();
});

test("Should have tag <input> and has className .form-control", () => {
  // ambil input dari setup
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test("Should show date picker when click input field", () => {
  // ambil container dan input dari setup
  const { container, input } = setup();

  // screen.debug();
  // button: 1 (klik kiri mouse)
  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
  // screen.debug();

  // ekspetasikan datePickerWrapper sudah ada di DOM/ Document
  expect(datePickerWrapper).toBeInTheDocument();
});
