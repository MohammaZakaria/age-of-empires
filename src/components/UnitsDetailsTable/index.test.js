import UnitsDetailsTable from "./../UnitsDetailsTable";
import { render, screen } from "../../utils/test-utils";

const initRows = {
  id: 1,
  name: "Archer",
  description:
    "Quick and light. Weak at close range; excels at battle from distance",
  age: "Feudal",
  cost: {
    Wood: 25,
    Gold: 45,
  },
  build_time: 35,
  reload_time: 2,
  hit_points: 4,
  attack: 4,
  accuracy: "80%",
};

test("Check table rows count to be equal to init props keys count", async () => {
  const { container } = render(<UnitsDetailsTable unit={initRows} />);
  const initRowsKeysLength = Object.keys(initRows).length;
  expect(container.getElementsByTagName("tr").length - 1).toBe(
    initRowsKeysLength
  );
});
