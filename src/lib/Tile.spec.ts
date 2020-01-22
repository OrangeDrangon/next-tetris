import { Tile } from "./Tile";
import { clockwise, counterClockwise } from "./RotationMatrix";

test("Should rotate about (0, 0) clockwise", () => {
  const tile = new Tile(0, 1);
  const rotated = tile.rotate(new Tile(0, 0), clockwise);

  expect(rotated.x).toBe(1);
  expect(rotated.y).toBe(0);
});

test("Should rotate (0, 1) about (0, 0) counter-clockwise", () => {
  const tile = new Tile(0, 1);
  const rotated = tile.rotate(new Tile(0, 0), counterClockwise);

  expect(rotated.x).toBe(-1);
  expect(rotated.y).toBe(0);
});
