import { render, screen } from "./utils/test-utils";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Units")).toBeInTheDocument();
  expect(screen.getByText("HOME")).toBeInTheDocument();
});
