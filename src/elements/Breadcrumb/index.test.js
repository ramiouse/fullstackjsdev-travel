import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { container } = render(
    <Route>
      <Breadcrumb data={breadcrumbList} />
    </Route>
  );
  const breadcrumb = container.querySelector(`.breadcrumb`);

  return {
    breadcrumb,
  };
};

test("Should have ol with className .breadcrumb and have text Home & House Details", () => {
  //   ambil breadcrumb dari setup
  const { breadcrumb } = setup();
  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHavetextContent("Home");
  expect(breadcrumb).toHavetextContent("House Details");
});
