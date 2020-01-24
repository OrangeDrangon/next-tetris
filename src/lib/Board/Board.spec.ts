import { createBoard, tilesDoFit, addPiece } from "./Board";
import { PieceShape, createPiece, translate } from "../Piece";
import { createVector, toString } from "../Vector";

test("Should verify there is space for the tiles", () => {
  const board = createBoard();
  const piece = translate(createPiece(PieceShape.L), createVector(5, 5));

  expect(tilesDoFit(board, piece.tiles)).toBe(true);
});

test("Should verify there is not space for the tiles", () => {
  const board = createBoard();
  const piece = translate(createPiece(PieceShape.L), createVector(-10, -10));

  expect(tilesDoFit(board, piece.tiles)).toBe(false);
});

test("Should add piece to baord", () => {
  const board = createBoard();
  const result = { ...board.field };
  result[toString(createVector(4, 5))] = PieceShape.I;
  result[toString(createVector(5, 5))] = PieceShape.I;
  result[toString(createVector(6, 5))] = PieceShape.I;
  result[toString(createVector(7, 5))] = PieceShape.I;
  const piece = translate(createPiece(PieceShape.I), createVector(5, 5));
  expect(addPiece(board, piece).field).toStrictEqual(result);
});

test("Should not add piece to baord", () => {
  const board = createBoard();
  const piece = translate(createPiece(PieceShape.I), createVector(-10, -10));
  expect(addPiece(board, piece).field).toStrictEqual(board.field);
});
