import { Vector } from "./Vector";
import { Tuple } from "./Tuple";

type Offset = Tuple<Vector, 4>;
type OffsetRules = Tuple<Offset, 5> | Tuple<Offset, 1>;

export const JLSTZ: OffsetRules = [
  [new Vector(0, 0), new Vector(0, 0), new Vector(0, 0), new Vector(0, 0)],
  [new Vector(0, 0), new Vector(1, 0), new Vector(0, 0), new Vector(-1, 0)],
  [new Vector(0, 0), new Vector(1, -1), new Vector(0, 0), new Vector(-1, -2)],
  [new Vector(0, 0), new Vector(0, 2), new Vector(0, 0), new Vector(0, 2)],
  [new Vector(0, 0), new Vector(1, 2), new Vector(0, 0), new Vector(-1, 2)],
];

export const I: OffsetRules = [
  [new Vector(0, 0), new Vector(-1, 0), new Vector(-1, 1), new Vector(0, 1)],
  [new Vector(-1, 0), new Vector(0, 0), new Vector(1, 1), new Vector(0, 1)],
  [new Vector(2, 0), new Vector(0, 0), new Vector(-2, 1), new Vector(0, 1)],
  [new Vector(-1, 0), new Vector(0, 1), new Vector(1, 0), new Vector(0, -1)],
  [new Vector(2, 0), new Vector(0, -2), new Vector(-2, 0), new Vector(0, 2)],
];

export const O: OffsetRules = [
  [new Vector(0, 0), new Vector(0, -1), new Vector(-1, -1), new Vector(-1, 0)],
];
