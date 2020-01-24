import { PieceShape, Piece } from "../Piece";
import { toString, createVector, Vector } from "../Vector";

export type Field = { [key: string]: null | PieceShape };

interface BoardConstructionOptions {
  readonly width: number;
  readonly height: number;
  readonly field: Field;
}

/**
 * Object to represent the field, width, and the height
 */
export interface Board {
  readonly field: Field;
  readonly width: number;
  readonly height: number;
}

/**
 * Creates an instance of Board from patioal or complete options of a board.
 *
 * @param {Partial<BoardConstructionOptions>} [options] Options to overide when creating a board.
 *
 * @returns {Board} New instance of board
 */
export const createBoard = (
  options?: Partial<BoardConstructionOptions>
): Board => {
  let width = options?.width || 10;
  let height = options?.height || 22;
  let field = options?.field || {};

  if (Object.keys(field).length === 0) {
    new Array(width * height).fill(0).forEach((_, index) => {
      field[
        toString(createVector(index % width, Math.floor(index / height)))
      ] = null;
    });
  }

  return { width, height, field };
};

/**
 * Calculates if a given array of tiles will fit in the current field.
 *
 * @param {Board} board Board to base checks on
 * @param {Vector[]} tiles Array of tiles to check if they fit
 *
 * @returns {boolean} Whether or not the piece fits
 */
export const tilesDoFit = (board: Board, tiles: Vector[]): boolean => {
  return tiles
    .map((tile) => board.field[toString(tile)] === null)
    .reduce((prev, curr) => prev && curr, true);
};

/**
 * Checks if a piece fits into the board and if so creates a new board with it in it.
 *
 * @param {Board} board Board to add piece to
 * @param {Piece} piece Piece to add.
 *
 * @returns {Board} New board with the added piece
 */
export const addPiece = (board: Board, piece: Piece): Board => {
  let newField = board.field;
  if (tilesDoFit(board, piece.tiles)) {
    newField = { ...board.field };
    piece.tiles.forEach((tile) => {
      newField[toString(tile)] = piece.shape;
    });
  }
  return createBoard({ ...board, field: newField });
};
