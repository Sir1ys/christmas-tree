const createChristmasTree = require("./index");

describe("createChristmasTree function", () => {
  test("return horizontal slash when the passed height equals to 0", () => {
    expect(createChristmasTree(0)).toBe("|");
  });
});
