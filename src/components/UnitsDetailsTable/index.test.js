import UnitsDetailsTable from "./../UnitsDetailsTable";
import { render, screen } from "../../utils/test-utils";

const initRows = {
  id: 1,
  name: "Archer",
  description:
    "Quick and light. Weak at close range; excels at battle from distance",
  expansion: "Age of Kings",
  age: "Feudal",
  cost: {
    Wood: 25,
    Gold: 45,
  },
  build_time: 35,
  reload_time: 2,
  attack_delay: 0.35,
  movement_rate: 0.96,
  line_of_sight: 6,
  hit_points: 4,
  range: 30,
  attack: 4,
  armor: "0/0",
  accuracy: "80%",
};

test("Check table rows values", async () => {
  render(<UnitsDetailsTable unit={initRows} />);
  // screen.debug();
  //   expect(screen.queryAllByRole("row")).toHaveLength(initRows.length + 2);
});
