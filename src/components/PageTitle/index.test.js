import * as redux from "react-redux";
import PageTitle from "./../PageTitle";
import { render, screen } from "../../utils/test-utils";

test("Test page title and check the rendered title form redux", () => {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({ pageTitle: "Units" });
  render(<PageTitle />);
  expect(screen.getByText("UNITS")).toBeInTheDocument();
});
