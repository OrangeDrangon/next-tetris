/**
 * Two potential matrices that could be used in the matrix multiplaction rotation.
 */
export type RotationMatrix = [[0, 1], [-1, 0]] | [[0, -1], [1, 0]];

/**
 * Clockwise rotation matrix
 */
export const clockwise: RotationMatrix = [
  [0, 1],
  [-1, 0],
];

/**
 * Counter clockwise routation matrix
 */
export const counterClockwise: RotationMatrix = [
  [0, -1],
  [1, 0],
];
