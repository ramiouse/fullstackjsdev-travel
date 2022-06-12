import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

/*
|must have ready props {value, height, width, spacing} on the element {stars}
| 
*/

test("Should have props [value, height, width, spacing", () => {
  const height = 40,
    width = 40,
    spacing = 4;
  const { container } = render(
    <Star width={width} height={height} spacing={spacing} value={3.6}></Star>
  );

  // target criteria element testing
  const starYellow = "div.stars div.star:not(.placeholder)";

  // RULES OF ELEMENT WITH PROPS

  // must be ready
  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toBeInTheDocument();

  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );

  // style must be ready width properties and value
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );

  // style must be ready height properties and value
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );

  // style must be ready margin-right as spacing properties and value
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});
