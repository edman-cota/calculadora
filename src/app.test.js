/* eslint-disable no-undef */
import { sum } from "./utils/sum";

describe("utils", () => {
  test("add 1 to 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
