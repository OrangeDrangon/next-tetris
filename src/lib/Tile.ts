import { RotationMatrix } from "./RotationMatrix";
import { Vector } from "./Vector";

export class Tile extends Vector {
  constructor(x: number, y: number) {
    super(x, y);
  }
  /**
   * Translates the tile by the provided vector.
   *
   * @param {Vector} vector Vector to translate by
   */
  public translate(vector: Vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  /**
   * Rotates the tile using matrix matrix multiplactions.
   *
   * @param {Tile} center Tile for the refrence piece in order to translate relative to the origin.
   * @param {RotationMatrix} rotationMatrix Matrix to use in the matrix multiplaction for rotation.
   */
  public rotate(center: Tile, rotationMatrix: RotationMatrix): void {
    const translatedTile = new Tile(this.x - center.x, this.y - center.y);
    const newX =
      rotationMatrix[0][0] * translatedTile.x +
      rotationMatrix[0][1] * translatedTile.y;
    const newY =
      rotationMatrix[1][0] * translatedTile.x +
      rotationMatrix[1][1] * translatedTile.y;

    this.x = newX + center.x;
    this.y = newY + center.y;
  }
}
