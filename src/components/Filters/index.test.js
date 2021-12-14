import Filters from "./../Filters";
import { render, screen } from "../../utils/test-utils";

const initItems = {
  Food: { isFiltering: false, value: 0 },
  Gold: { isFiltering: false, value: 0 },
  Wood: { isFiltering: false, value: 0 },
};
test("Check sliders toggles when false value", async () => {
  const { container } = await render(<Filters filteringItems={initItems} />);
  const inputs = container.querySelectorAll(".check_box");
  expect(container.getElementsByClassName("MuiSlider-root").length).toBe(3);
  inputs.forEach((input) => {
    expect(input.checked).toBeFalsy();
  });
});

test("Check sliders toggles when true value", async () => {
  const withTrueValuesArray = Object.keys(initItems).map((item) => {
    if (!initItems[item].isFiltering) {
      initItems[item].isFiltering = true;
    }
    return initItems[item];
  });

  const { container } = await render(
    <Filters filteringItems={withTrueValuesArray} />
  );
  const inputs = container.querySelectorAll(".check_box");

  expect(container.querySelectorAll(".filters span.Mui-disabled").length).toBe(
    0
  );
  inputs.forEach((input) => {
    expect(input.checked).toBeTruthy();
  });
});
