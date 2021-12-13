import { render, screen } from "./utils/test-utils";
import { cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText("Home")).toBeInTheDocument();
});
