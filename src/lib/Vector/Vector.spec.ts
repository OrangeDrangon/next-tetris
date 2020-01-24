import { createVector, add, invert, subtract, rotate } from "./Vector";
import { clockwise, counterClockwise } from "../RotationMatrix";

test("Should create a new vector", () => {
  const vector = createVector(10, 4);
  expect(vector).toStrictEqual({ x: 10, y: 4 });
});

test("Should create a translated vector by (10, 10)", () => {
  const vector = createVector(10, 4);
  const translated = add(vector, createVector(10, 10));
  expect(translated).toStrictEqual(createVector(20, 14));
});

test("Should create an inverted vector", () => {
  const vector = createVector(10, 4);
  const inverted = invert(vector);
  expect(inverted).toStrictEqual(createVector(-10, -4));
});

test("Should subtract one vector (10, 4) from the other (10, 10)", () => {
  const vector = createVector(10, 4);
  const subtracted = subtract(vector, createVector(10, 10));
  expect(subtracted).toStrictEqual(createVector(0, -6));
});

test("Should rotate about (0, 0) clockwise", () => {
  const tile = createVector(0, 1);
  const rotated = rotate(tile, createVector(0, 0), clockwise);
  expect(rotated).toStrictEqual(createVector(1, 0));
});

test("Should rotate (0, 1) about (0, 0) counter-clockwise", () => {
  const tile = createVector(0, 1);
  const rotated = rotate(tile, createVector(0, 0), counterClockwise);
  expect(rotated).toStrictEqual(createVector(-1, 0));
});
