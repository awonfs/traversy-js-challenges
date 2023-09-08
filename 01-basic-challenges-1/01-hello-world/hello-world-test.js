const helloWorld = require("./hello-world");
const helloName = require("./hello-name");

test("Returning 'Hello, World!' as a string", () => {
  const result = helloWorld();
  expect(result).toBe("Hello World!");
});

test("Returning `Hello, ${name}` as a string.", () => {
  const name = "Inga";
  const result = helloName(name);
  expect(result).toBe(`Hello, ${name}`);
});
