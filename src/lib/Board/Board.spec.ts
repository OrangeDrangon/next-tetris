import { Board } from "./Board";
import { Piece, PieceShape } from "../Piece";
import { Vector } from "../Vector";

test("Should verify there is space for the tiles", () => {
  const board = new Board();
  const piece = new Piece(PieceShape.L).translate(new Vector(5, 5));

  expect(board.tilesDoFit(piece.tiles)).toBe(true);
});

test("Should verify there is not space for the tiles", () => {
  const board = new Board();
  const piece = new Piece(PieceShape.L).translate(new Vector(-10, -10));

  expect(board.tilesDoFit(piece.tiles)).toBe(false);
});

test("Should add piece to baord", () => {
  const board = new Board();
  const result = new Map(board.field);
  result.set("4,5", PieceShape.I);
  result.set("5,5", PieceShape.I);
  result.set("6,5", PieceShape.I);
  result.set("7,5", PieceShape.I);
  const piece = new Piece(PieceShape.I).translate(new Vector(5, 5));
  expect(board.addPiece(piece).field).toStrictEqual(result);
});

test("Should not add piece to baord", () => {
  const board = new Board();
  const piece = new Piece(PieceShape.I).translate(new Vector(-10, -10));
  expect(board.addPiece(piece).field).toStrictEqual(board.field);
});
