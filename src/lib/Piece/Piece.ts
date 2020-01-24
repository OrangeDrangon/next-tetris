import { Tuple } from "../Tuple";
import { clockwise, counterClockwise } from "../RotationMatrix";
import { OffsetRules, I_OFFSET, O_OFFSET, JLSTZ_OFFSET } from "../OffsetRules";
import { Board, tilesDoFit } from "../Board";
import {
  Vector,
  createVector,
  add,
  rotate as vectorRotate,
  subtract,
} from "../Vector";

/**
 * The 7 permutations of tetriminos possible in a game of tetris.
 *
 * ![tetriminos](https://tetris.wiki/images/3/3d/SRS-pieces.png)
 */
export enum PieceShape {
  I,
  L,
  J,
  O,
  Z,
  S,
  T,
}

/**
 * Possible directions of rotation in the game of tetris.
 */
export enum RotationDirection {
  clockwise,
  counterClockwise,
}

type RotationIndex = 0 | 1 | 2 | 3;

export interface PieceOptions {
  readonly tiles: Tuple<Vector, 4>;
  readonly index: RotationIndex;
}

export interface Piece {
  readonly shape: PieceShape;
  readonly tiles: Tuple<Vector, 4>;
  readonly index: RotationIndex;
}

/**
 * Initializes a new pience with the given shape in the correct spawn position. With cordinate relative to the center.
 *
 * @param {PieceShape} shape Shape of the piece to create.
 * @param {Vector} [vector] Optional initial translation of the piece
 */
export const createPiece = (
  shape: PieceShape,
  options?: Partial<PieceOptions>
): Piece => {
  const index = options?.index || 0;
  let tiles = options?.tiles;
  if (tiles == null) {
    switch (shape) {
      case PieceShape.I:
        tiles = [
          createVector(0, 0),
          createVector(-1, 0),
          createVector(1, 0),
          createVector(2, 0),
        ];
        break;
      case PieceShape.J:
        tiles = [
          createVector(0, 0),
          createVector(-1, 1),
          createVector(-1, 0),
          createVector(1, 0),
        ];
        break;
      case PieceShape.L:
        tiles = [
          createVector(0, 0),
          createVector(1, 1),
          createVector(-1, 0),
          createVector(1, 0),
        ];
        break;
      case PieceShape.O:
        tiles = [
          createVector(0, 0),
          createVector(0, 1),
          createVector(1, 1),
          createVector(1, 0),
        ];
        break;
      case PieceShape.S:
        tiles = [
          createVector(0, 0),
          createVector(0, 1),
          createVector(1, 1),
          createVector(-1, 0),
        ];
        break;
      case PieceShape.Z:
        tiles = [
          createVector(0, 0),
          createVector(-1, 1),
          createVector(0, 1),
          createVector(1, 0),
        ];
        break;
      case PieceShape.T:
        tiles = [
          createVector(0, 0),
          createVector(0, 1),
          createVector(-1, 0),
          createVector(1, 0),
        ];
        break;
    }
  }

  return { tiles, index, shape };
};

/**
 * Translates all of the tiles by the provided vector.
 *
 * @param {Vector} vector Vector to translate by.
 */
export const translate = (piece: Piece, vector: Vector): Piece => {
  return createPiece(piece.shape, {
    tiles: piece.tiles.map((tile) => add(tile, vector)) as Tuple<Vector, 4>,
  });
};

/**
 * Rotates the piece by rotating each tile using the calculated matrix.
 *
 * @param {Board} board Instance of the board class in order to check if the createVectors will fit
 * @param {RotationDirection} direction Direction to rotate the piece
 * @param {boolean} [offset=false] Should wallkick / offset checks be done
 */
export const rotate = (
  piece: Piece,
  board: Board,
  direction: RotationDirection,
  offset: boolean = false
): Piece => {
  const rotationMatrix =
    direction === RotationDirection.clockwise ? clockwise : counterClockwise;

  let newTiles = piece.tiles.map((tile) =>
    vectorRotate(tile, piece.tiles[0], rotationMatrix)
  );
  const newIndex = (((piece.index % 4) + piece.index) % 4) as RotationIndex;
  const canRotate = tilesDoFit(board, newTiles);

  if (offset && !canRotate) {
    let rules: OffsetRules;
    switch (piece.shape) {
      case PieceShape.I:
        rules = I_OFFSET;
        break;
      case PieceShape.O:
        rules = O_OFFSET;
        break;
      default:
        rules = JLSTZ_OFFSET;
        break;
    }

    rules.some((rule) => {
      const movementOffset = subtract(rule[newIndex], rule[piece.index]);
      const testTiles = newTiles.map((tile) => add(tile, movementOffset));
      const doFit = tilesDoFit(board, testTiles);
      if (doFit) {
        newTiles = testTiles;
        return true;
      }
      return false;
    });
  }

  return createPiece(piece.shape, {
    index: newIndex,
    tiles: newTiles as Tuple<Vector, 4>,
  });
};
