import NavBar from "./../NavBar";
import { render, screen } from "../../utils/test-utils";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("check NavBar displayed Links", () => {
  const history = createMemoryHistory();
  const location = { pathname: "/" };
  render(
    <Router location={location} history={history}>
      <NavBar />
    </Router>
  );
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Units")).toBeInTheDocument();
});
