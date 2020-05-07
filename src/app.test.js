import { avg } from "./App";

const average = [1, 1, 1, 1, 1, 1, 1, 1];

test("get the average", () => {
  expect(avg(average)).toBe(1);
});
