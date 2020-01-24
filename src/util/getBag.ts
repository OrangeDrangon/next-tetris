import { Piece, PieceShape, createPiece, translate } from "../lib/Piece";
import shuffle from "shuffle-array";
import { createVector } from "../lib/Vector";

/**
 * The typing for one bag of pieces.
 */
export type Bag = Piece[];

/**
 * An unshuffled constant that is copied and shuffled in the [[getBag]] function.
 */
const unshuffledBag: Bag = [
  translate(createPiece(PieceShape.I), createVector(5, 21)),
  translate(createPiece(PieceShape.L), createVector(5, 21)),
  translate(createPiece(PieceShape.J), createVector(5, 21)),
  translate(createPiece(PieceShape.O), createVector(5, 21)),
  translate(createPiece(PieceShape.S), createVector(5, 21)),
  translate(createPiece(PieceShape.T), createVector(5, 21)),
  translate(createPiece(PieceShape.Z), createVector(5, 21)),
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
