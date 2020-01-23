import { Vector } from "../Vector";
import { PieceShape, Piece } from "../Piece";
import { Tile } from "../Tile";

type Field = Map<string, PieceShape | null>;

interface BoardConstructionOptions {
  width: number;
  height: number;
  field: Field;
}
/**
 * Holds board as a map and some methods for interacting with it.
 */
export class Board {
  public readonly field: Field;
  public readonly width: number = 10;
  public readonly height: number = 22;

  /**
   * Creates an instance of Board from patioal or complete options of a board.
   *
   * @param {Partial<BoardConstructionOptions>} [options] Options to overide when creating a board.
   */
  constructor(options?: Partial<BoardConstructionOptions>) {
    if (options?.width != null) this.width = options.width;
    if (options?.height != null) this.height = options.height;

    if (options?.field != null) {
      this.field = options.field;
    } else {
      this.field = new Map(
        new Array(this.width * this.height)
          .fill(0)
          .map((_, index) => [
            `${index % this.width},${Math.floor(index / this.height)}`,
            null,
          ])
      );
    }
  }

  /**
   * Calculates if a given array of tiles will fit in the current field.
   *
   * @param {Tile[]} tiles Array of tiles to check if they fit
   */
  public tilesDoFit(tiles: Tile[]): boolean {
    return tiles
      .map((tile) => this.field.get(`${tile.x},${tile.y}`) === null)
      .reduce((prev, curr) => prev && curr, true);
  }

  /**
   * Checks if a piece fits into the board and if so creates a new board with it in it.
   *
   * @param {Piece} piece Piece to add.
   */
  public addPiece(piece: Piece): Board {
    if (this.tilesDoFit(piece.tiles)) {
      const newField = new Map(this.field);
      piece.tiles.forEach((tile) => {
        newField.set(`${tile.x},${tile.y}`, piece.shape);
      });
      return new Board({
        width: this.width,
        height: this.height,
        field: newField,
      });
    } else {
      return new Board({
        width: this.width,
        height: this.height,
        field: this.field,
      });
    }
  }
}
