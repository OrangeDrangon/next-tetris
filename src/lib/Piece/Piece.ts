import { Tile } from "../Tile";
import { Tuple } from "../Tuple";
import { clockwise, counterClockwise } from "../RotationMatrix";
import { Vector } from "../Vector";

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

interface PieceOptions {
  translationVector: Vector;
  tiles: Tuple<Tile, 4>;
  index: RotationIndex;
}

/**
 * Representation of the piece object.
 */
export class Piece {
  public readonly shape: PieceShape;
  public readonly tiles: Tuple<Tile, 4>;
  private readonly index: RotationIndex = 0;

  /**
   * Initializes a new pience with the given shape in the correct spawn position. With cordinate relative to the center.
   *
   * @param {PieceShape} shape Shape of the piece to create.
   * @param {Vector} [vector] Optional initial translation of the piece
   */
  constructor(shape: PieceShape, options?: Partial<PieceOptions>) {
    this.shape = shape;
    if (options?.tiles == null) {
      switch (this.shape) {
        case PieceShape.I:
          this.tiles = [
            new Tile(0, 0),
            new Tile(-1, 0),
            new Tile(1, 0),
            new Tile(2, 0),
          ];
          break;
        case PieceShape.J:
          this.tiles = [
            new Tile(0, 0),
            new Tile(-1, 1),
            new Tile(-1, 0),
            new Tile(1, 0),
          ];
          break;
        case PieceShape.L:
          this.tiles = [
            new Tile(0, 0),
            new Tile(1, 1),
            new Tile(-1, 0),
            new Tile(1, 0),
          ];
          break;
        case PieceShape.O:
          this.tiles = [
            new Tile(0, 0),
            new Tile(0, 1),
            new Tile(1, 1),
            new Tile(1, 0),
          ];
          break;
        case PieceShape.S:
          this.tiles = [
            new Tile(0, 0),
            new Tile(0, 1),
            new Tile(1, 1),
            new Tile(-1, 0),
          ];
          break;
        case PieceShape.Z:
          this.tiles = [
            new Tile(0, 0),
            new Tile(-1, 1),
            new Tile(0, 1),
            new Tile(1, 0),
          ];
          break;
        case PieceShape.T:
          this.tiles = [
            new Tile(0, 0),
            new Tile(0, 1),
            new Tile(-1, 0),
            new Tile(1, 0),
          ];
          break;
      }
    } else {
      this.tiles = options.tiles;
    }

    options?.translationVector && this.translate(options.translationVector);
    if (options?.index != null) {
      this.index = options.index;
    }
  }

  /**
   * Translates all of the tiles by the provided vector.
   *
   * @param {Vector} vector Vector to translate by.
   */
  public translate(vector: Vector): Piece {
    return new Piece(this.shape, {
      tiles: this.tiles.map((tile) => tile.add(vector)) as Tuple<Tile, 4>,
    });
  }

  /**
   * Rotates the piece by rotating each tile using the calculated matrix.
   *
   * @param {RotationDirection} direction Direction to rotate the piece
   * @param {boolean} [offset=false] Should wallkick / offset checks be done
   */
  public rotate(direction: RotationDirection, offset: boolean = false): Piece {
    const rotationMatrix =
      direction === RotationDirection.clockwise ? clockwise : counterClockwise;

    const newIndex = (((this.index % 4) + this.index) % 4) as RotationIndex;

    if (offset) {
    }

    return new Piece(this.shape, {
      index: newIndex,
      tiles: this.tiles.map((tile) =>
        tile.rotate(this.tiles[0], rotationMatrix)
      ) as Tuple<Tile, 4>,
    });
  }
}
