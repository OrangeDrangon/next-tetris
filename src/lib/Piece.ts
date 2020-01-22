import { Tile } from "./Tile";
import { Tuple } from "./Tuple";
import { clockwise, counterClockwise } from "./RotationMatrix";
import { Vector } from "./Vector";

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

/**
 * Representation of the piece object.
 */
export class Piece {
  public readonly shape: PieceShape;
  public readonly tiles: Tuple<Tile, 4>;
  private index: 0 | 1 | 2 | 3 = 0;

  /**
   * Initializes a new pience with the given shape in the correct spawn position. With cordinate relative to the center.
   *
   * @param {PieceShape} shape Shape of the piece to create.
   */
  constructor(shape: PieceShape) {
    this.shape = shape;

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
  }
/**
 * Translates all of the tiles by the provided vector.
 *
 * @param {Vector} vector Vector to translate by.
 */
public translate(vector: Vector) {
    this.tiles.forEach((tile) => tile.translate(vector));
  }

  /**
   * Rotates the piece by rotating each tile using the calculated matrix.
   *
   * @param {RotationDirection} direction Direction to rotate the piece
   * @param {boolean} [offset=false] Should wallkick / offset checks be done
   */
  public rotate(direction: RotationDirection, offset: boolean = false): void {
    const rotationMatrix =
      direction === RotationDirection.clockwise ? clockwise : counterClockwise;

    const center = new Tile(this.tiles[0].x, this.tiles[0].y);
    this.tiles.map((tile) => tile.rotate(center, rotationMatrix));

    const newIndex = ((this.index % 4) + this.index) % 4;
  }
}
