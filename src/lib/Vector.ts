/**
 * A basic point class.
 */
export class Vector {
  public readonly x: number;
  public readonly y: number;
  /**
   * Creates an instance of Vector from an (x, y) point.
   * @param {number} x X coordinate
   * @param {number} y Y coordinate
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Creates an invertered vector.
   */
  public invert(): Vector {
    return new Vector(-this.x, -this.y);
  }

  /**
   * Translates the vector by the provided vector.
   *
   * @param {Vector} vector Vector to translate by
   */
  public translate(vector: Vector): Vector {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
}
