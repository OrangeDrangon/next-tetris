/**
 * A basic point class.
 */
export class Vector {
  public x: number;
  public y: number;
  /**
   * Creates an instance of Vector from an (x, y) point.
   * @param {number} x X coordinate
   * @param {number} y Y coordinate
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
