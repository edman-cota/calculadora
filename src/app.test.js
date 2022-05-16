/* eslint-disable no-undef */
import { substraction } from "./utils/substraction";
import { sum } from "./utils/sum";
import { multiply } from "./utils/multiply";
import { division } from "./utils/division";

describe("utils", () => {
  test("add 1 to 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("substract 2 from 4", () => {
    expect(substraction(4, 2)).toBe(2);
  });

  test("multiply", () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test("division", () => {
    expect(division(10, 2)).toBe(5);
  });
});
