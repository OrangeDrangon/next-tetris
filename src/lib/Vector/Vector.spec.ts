import { Vector } from "./Vector";

test("Should create a new vector", () => {
  const vector = new Vector(10, 4);
  expect(vector.x).toBe(10);
  expect(vector.y).toBe(4);
});

test("Should create a translated vector by (10, 10)", () => {
  const vector = new Vector(10, 4);
  const translated = vector.add(new Vector(10, 10));
  expect(translated.x).toBe(20);
  expect(translated.y).toBe(14);
});

test("Should create an inverted vector", () => {
  const vector = new Vector(10, 4);
  const inverted = vector.invert();
  expect(inverted.x).toBe(-10);
  expect(inverted.y).toBe(-4);
});

test("Should subtract one vector (10, 4) from the other (10, 10)", () => {
  const vector = new Vector(10, 4);
  const subtracted = vector.subtract(new Vector(10, 10));
  expect(subtracted.x).toBe(0);
  expect(subtracted.y).toBe(-6);
});
