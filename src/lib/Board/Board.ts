import { Vector } from "../Vector";
import { PieceShape, Piece } from "../Piece";
import { Tile } from "../Tile";

type Field = Map<string, PieceShape | null>;

interface BoardConstructionOptions {
  width: number;
  height: number;
  field: Field;
}

export class Board {
  public readonly field: Field;
  public readonly width: number = 10;
  public readonly height: number = 22;

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

  public tilesDoFit(tiles: Tile[]): boolean {
    return tiles
      .map((tile) => this.field.get(`${tile.x},${tile.y}`) === null)
      .reduce((prev, curr) => prev && curr, true);
  }

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
