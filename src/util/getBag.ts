import { Piece, PieceShape } from "../lib/Piece";
import shuffle from "shuffle-array";

/**
 * The typing for one bag of pieces.
 */
export type Bag = Piece[];

/**
 * An unshuffled constant that is copied and shuffled in the [[getBag]] function.
 */
const unshuffledBag: Bag = [
  new Piece(PieceShape.I),
  new Piece(PieceShape.L),
  new Piece(PieceShape.J),
  new Piece(PieceShape.O),
  new Piece(PieceShape.S),
  new Piece(PieceShape.T),
  new Piece(PieceShape.Z),
];

/**
 * Creates and shuffles a bag of pieces. It contains one of each of the tetriminos in a random order.
 *
 * @returns {Bag} A bag that holds 1 of each kind of piece shuffled.
 */
export function getBag(): Bag {
  const toShuffle = unshuffledBag.slice();
  return shuffle(toShuffle);
}
