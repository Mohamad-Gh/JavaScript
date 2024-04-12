const addFivel = require(`./addFive`);
test("return the number plus 5", () => {
  expect(addFivel(1)).toBe(6);
});
