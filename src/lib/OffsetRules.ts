import { Vector, createVector } from "./Vector";
import { Tuple } from "./Tuple";

type Offset = Tuple<Vector, 4>;
export type OffsetRules = Tuple<Offset, 5> | Tuple<Offset, 1>;

export const JLSTZ_OFFSET: OffsetRules = [
  [
    createVector(0, 0),
    createVector(0, 0),
    createVector(0, 0),
    createVector(0, 0),
  ],
  [
    createVector(0, 0),
    createVector(1, 0),
    createVector(0, 0),
    createVector(-1, 0),
  ],
  [
    createVector(0, 0),
    createVector(1, -1),
    createVector(0, 0),
    createVector(-1, -2),
  ],
  [
    createVector(0, 0),
    createVector(0, 2),
    createVector(0, 0),
    createVector(0, 2),
  ],
  [
    createVector(0, 0),
    createVector(1, 2),
    createVector(0, 0),
    createVector(-1, 2),
  ],
];

export const I_OFFSET: OffsetRules = [
  [
    createVector(0, 0),
    createVector(-1, 0),
    createVector(-1, 1),
    createVector(0, 1),
  ],
  [
    createVector(-1, 0),
    createVector(0, 0),
    createVector(1, 1),
    createVector(0, 1),
  ],
  [
    createVector(2, 0),
    createVector(0, 0),
    createVector(-2, 1),
    createVector(0, 1),
  ],
  [
    createVector(-1, 0),
    createVector(0, 1),
    createVector(1, 0),
    createVector(0, -1),
  ],
  [
    createVector(2, 0),
    createVector(0, -2),
    createVector(-2, 0),
    createVector(0, 2),
  ],
];

export const O_OFFSET: OffsetRules = [
  [
    createVector(0, 0),
    createVector(0, -1),
    createVector(-1, -1),
    createVector(-1, 0),
  ],
];
