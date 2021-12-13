import Toggles from "./../Toggles";
import { render, screen } from "../../utils/test-utils";

test("Get default toggled button and make sure it is are enabled and active", () => {
  const arr = ["Feudal", "Castle", "Imperial", "Dark"];
  render(<Toggles toggleLabels={arr} toggle={"All"} />);
  const btn = screen.getByRole("button", { name: /All/i });
  expect(btn).toBeEnabled();
  expect(btn.classList.contains("active")).toBe(true);
});

test("Get Feudal toggled button and make sure it is are enabled and active", () => {
  const arr = ["Feudal", "Castle", "Imperial", "Dark"];
  render(<Toggles toggleLabels={arr} toggle={"Feudal"} />);
  const btn = screen.getByRole("button", { name: /Feudal/i });
  expect(btn).toBeEnabled();
  expect(btn.classList.contains("active")).toBe(true);
});

test("Get Castle toggled button and make sure it is are enabled and active", () => {
  const arr = ["Feudal", "Castle", "Imperial", "Dark"];
  render(<Toggles toggleLabels={arr} toggle={"Castle"} />);
  const btn = screen.getByRole("button", { name: /Castle/i });
  expect(btn).toBeEnabled();
  expect(btn.classList.contains("active")).toBe(true);
});

test("Get Feudal toggled button and make sure it is are enabled and active", () => {
  const arr = ["Feudal", "Castle", "Imperial", "Dark"];
  render(<Toggles toggleLabels={arr} toggle={"Imperial"} />);
  const btn = screen.getByRole("button", { name: /Imperial/i });
  expect(btn).toBeEnabled();
  expect(btn.classList.contains("active")).toBe(true);
});

test("Get Feudal toggled button and make sure it is are enabled and active", () => {
  const arr = ["Feudal", "Castle", "Imperial", "Dark"];
  render(<Toggles toggleLabels={arr} toggle={"Dark"} />);
  const btn = screen.getByRole("button", { name: /Dark/i });
  expect(btn).toBeEnabled();
  expect(btn.classList.contains("active")).toBe(true);
});
