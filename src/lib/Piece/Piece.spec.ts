import { createVector } from "../Vector";
import { createBoard } from "../Board";
import {
  createPiece,
  PieceShape,
  RotationDirection,
  translate,
  rotate,
} from "./Piece";

test("Should create a horizontal I piece", () => {
  const piece = createPiece(PieceShape.I);
  expect(piece.shape).toBe(PieceShape.I);
  expect(piece.tiles).toStrictEqual([
    createVector(0, 0),
    createVector(-1, 0),
    createVector(1, 0),
    createVector(2, 0),
  ]);
});

test("Should create a O piece", () => {
  const piece = createPiece(PieceShape.O);
  expect(piece.shape).toBe(PieceShape.O);
  expect(piece.tiles).toStrictEqual([
    createVector(0, 0),
    createVector(0, 1),
    createVector(1, 1),
    createVector(1, 0),
  ]);
});

test("Should translate an I piece by the vector", () => {
  const piece = createPiece(PieceShape.I);
  const vector = createVector(10, 10);

  const translated = translate(piece, vector);

  expect(translated.tiles).toStrictEqual([
    createVector(10, 10),
    createVector(9, 10),
    createVector(11, 10),
    createVector(12, 10),
  ]);
});

test("Should rotate the Z piece clockwise without offsets", () => {
  const piece = createPiece(PieceShape.Z);
  const board = createBoard();
  const rotated = rotate(piece, board, RotationDirection.clockwise, false);
  expect(rotated.tiles).toStrictEqual([
    createVector(0, 0),
    createVector(1, 1),
    createVector(1, 0),
    createVector(0, -1),
  ]);
});

test("Should rotate the S piece counter-clockwise without offsets", () => {
  const piece = createPiece(PieceShape.S);
  const board = createBoard();
  const rotated = rotate(
    piece,
    board,
    RotationDirection.counterClockwise,
    false
  );
  expect(rotated.tiles).toStrictEqual([
    createVector(0, 0),
    createVector(-1, 0),
    createVector(-1, 1),
    createVector(0, -1),
  ]);
});

test("Should rotate the L piece clockwise without offsets", () => {
  const piece = createPiece(PieceShape.L);
  const board = createBoard();
  const rotated = rotate(piece, board, RotationDirection.clockwise, false);
  expect(rotated.tiles).toStrictEqual([
    createVector(0, 0),
    createVector(1, -1),
    createVector(0, 1),
    createVector(0, -1),
  ]);
});

test("Should rotate the J piece counter-clockwise without offsets", () => {
  const piece = createPiece(PieceShape.J);
  const board = createBoard();
  const rotated = rotate(
    piece,
    board,
    RotationDirection.counterClockwise,
    false
  );
  expect(rotated.tiles).toStrictEqual([
    createVector(0, 0),
    createVector(-1, -1),
    createVector(0, -1),
    createVector(0, 1),
  ]);
});

test("Should rotate the T piece counter-clockwise without offsets", () => {
  const piece = createPiece(PieceShape.T);
  const board = createBoard();
  const rotated = rotate(
    piece,
    board,
    RotationDirection.counterClockwise,
    false
  );
  expect(rotated.tiles).toStrictEqual([
    createVector(0, 0),
    createVector(-1, 0),
    createVector(0, -1),
    createVector(0, 1),
  ]);
});
