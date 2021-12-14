import * as redux from "react-redux";
import Footer from "./../Footer";
import { render, screen } from "../../utils/test-utils";

test("check Footer displayed text", () => {
  render(<Footer />);
  expect(screen.getByText("Developed by:")).toBeInTheDocument();
  expect(screen.getByText("Mohammed Alalaya 😎")).toBeInTheDocument();
});
