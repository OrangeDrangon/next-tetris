import { RotationMatrix } from "../RotationMatrix";
import { Vector } from "../Vector";

export class Tile extends Vector {
  constructor(x: number, y: number) {
    super(x, y);
  }

  /**
   * Adds the tile to the provided tile.
   *
   * @param {Vector} vector Vector to add by
   */
  public add(vector: Vector): Tile {
    const { x, y } = super.add(vector);
    return new Tile(x, y);
  }

  /**
   * Creates an invertered vector.
   */
  public invert(): Tile {
    const { x, y } = super.invert();
    return new Tile(x, y);
  }

  /**
   * Subtracts the tile by the provided vector.
   *
   * @param {Vector} vector Vector to subtract by
   */
  public subtract(vector: Vector): Tile {
    const { x, y } = super.subtract(vector);
    return new Tile(x, y);
  }

  /**
   * Rotates the tile using matrix matrix multiplactions.
   *
   * @param {Tile} center Tile for the refrence piece in order to translate relative to the origin.
   * @param {RotationMatrix} rotationMatrix Matrix to use in the matrix multiplaction for rotation.
   */
  public rotate(center: Tile, rotationMatrix: RotationMatrix): Tile {
    const translatedTile = this.subtract(center);
    const newX =
      rotationMatrix[0][0] * translatedTile.x +
      rotationMatrix[0][1] * translatedTile.y;
    const newY =
      rotationMatrix[1][0] * translatedTile.x +
      rotationMatrix[1][1] * translatedTile.y;

    return new Tile(newX, newY).add(center);
  }
}
