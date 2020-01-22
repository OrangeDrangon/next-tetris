import { Piece, PieceShape, RotationDirection } from "./Piece";
import { Tile } from "./Tile";

test("Should create a horizontal I piece", () => {
  const piece = new Piece(PieceShape.I);
  expect(piece.shape).toBe(PieceShape.I);
  expect(piece.tiles).toStrictEqual([
    new Tile(0, 0),
    new Tile(-1, 0),
    new Tile(1, 0),
    new Tile(2, 0),
  ]);
});

test("Should create a O piece", () => {
  const piece = new Piece(PieceShape.O);
  expect(piece.shape).toBe(PieceShape.O);
  expect(piece.tiles).toStrictEqual([
    new Tile(0, 0),
    new Tile(0, 1),
    new Tile(1, 1),
    new Tile(1, 0),
  ]);
});

test("Should rotate the Z piece clockwise without offsets", () => {
  const piece = new Piece(PieceShape.Z);
  piece.rotate(RotationDirection.clockwise, false);
  expect(piece.tiles).toStrictEqual([
    new Tile(0, 0),
    new Tile(1, 1),
    new Tile(1, 0),
    new Tile(0, -1),
  ]);
});

test("Should rotate the S piece counter-clockwise without offsets", () => {
  const piece = new Piece(PieceShape.S);
  piece.rotate(RotationDirection.counterClockwise, false);
  expect(piece.tiles).toStrictEqual([
    new Tile(0, 0),
    new Tile(-1, 0),
    new Tile(-1, 1),
    new Tile(0, -1),
  ]);
});

test("Should rotate the L piece clockwise without offsets", () => {
  const piece = new Piece(PieceShape.L);
  piece.rotate(RotationDirection.clockwise, false);
  expect(piece.tiles).toStrictEqual([
    new Tile(0, 0),
    new Tile(1, -1),
    new Tile(0, 1),
    new Tile(0, -1),
  ]);
});

test("Should rotate the J piece counter-clockwise without offsets", () => {
  const piece = new Piece(PieceShape.J);
  piece.rotate(RotationDirection.counterClockwise, false);
  expect(piece.tiles).toStrictEqual([
    new Tile(0, 0),
    new Tile(-1, -1),
    new Tile(0, -1),
    new Tile(0, 1),
  ]);
});

test("Should rotate the T piece counter-clockwise without offsets", () => {
  const piece = new Piece(PieceShape.T);
  piece.rotate(RotationDirection.counterClockwise, false);
  expect(piece.tiles).toStrictEqual([
    new Tile(0, 0),
    new Tile(-1, 0),
    new Tile(0, -1),
    new Tile(0, 1),
  ]);
});
