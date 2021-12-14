import Hero from "./../Hero";
import { render, screen } from "../../utils/test-utils";

test("check Hero displayed text", () => {
  render(<Hero />);
  expect(screen.getByText("Age of empires")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Age of Empires is a series of historical real-time strategy video games, originally developed by Ensemble Studios and published by Xbox Game Studios. The first game was Age of Empires, released in 1997. Nine total games within the series have been released so far."
    )
  ).toBeInTheDocument();
});
