import { RotationMatrix } from "../RotationMatrix";

/**
 * A basic point.
 */
export interface Vector {
  readonly x: number;
  readonly y: number;
}

/**
 * Creates an instance of Vector from an (x, y) point.
 *
 * @param {number} x X coordinate
 * @param {number} y Y coordinate
 *
 * @returns {Vector}
 */
export const createVector = (x: number, y: number): Vector => {
  return { x, y };
};

/**
 * Creates an invertered vector.
 *
 * @param {Vector} vector Vector to invert
 *
 * @returns {Vector} New inverted vector
 */
export const invert = ({ x, y }: Vector): Vector => {
  return createVector(-x, -y);
};

/**
 * Add the vector to the provided vector.
 *
 * @param {Vector} a Vector to add by
 * @param {Vector} b Vector to add by
 *
 * @returns {Vector} New added vector
 */
export const add = (a: Vector, b: Vector): Vector => {
  return createVector(a.x + b.x, a.y + b.y);
};

/**
 * Subtracts the minuend from the subtrahend.
 *
 * @param {Vector} minuend Vector to subtract from
 * @param {Vector} subtrahend Vector to subtract by
 *
 * @returns {Vector} New subtracted vector
 */
export const subtract = (minuend: Vector, subtrahend: Vector): Vector => {
  return add(invert(subtrahend), minuend);
};

export const toString = ({ x, y }: Vector): string => {
  return `(${x},${y})`;
};

/**
 * Rotates the tile using matrix matrix multiplactions.
 *
 * @param {Vector} tile Vector to rotate
 * @param {Vector} center Tile for the refrence piece in order to translate relative to the origin.
 * @param {RotationMatrix} rotationMatrix Matrix to use in the matrix multiplaction for rotation.
 *
 * @returns {Vector} New rotated vector
 */
export const rotate = (
  tile: Vector,
  center: Vector,
  rotationMatrix: RotationMatrix
): Vector => {
  const translatedTile = subtract(tile, center);
  const newX =
    rotationMatrix[0][0] * translatedTile.x +
    rotationMatrix[0][1] * translatedTile.y;
  const newY =
    rotationMatrix[1][0] * translatedTile.x +
    rotationMatrix[1][1] * translatedTile.y;

  return add(createVector(newX, newY), center);
};
