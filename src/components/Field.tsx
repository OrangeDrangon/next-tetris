import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { PieceShape } from "../lib/Piece";
import { toString } from "../lib/Vector";

interface Props {}

export const Field: React.FC<Props> = ({}) => {
  const { field, width, height } = useSelector(
    (state: RootState) => state.game.board
  );
  const activePiece = useSelector((state: RootState) => state.game.activePiece);
  const tiles = useMemo(() => {
    if (activePiece != null) {
      const points = activePiece.tiles.map((tile) => toString(tile));
      return Object.entries(field)
        .slice(2 * width)
        .map(([key, shape], index) => {
          if (points.includes(key)) {
            shape = activePiece.shape;
          }
          let color: string;
          switch (shape) {
            case PieceShape.I:
              color = "cyan";
              break;
            case PieceShape.J:
              color = "blue";
              break;
            case PieceShape.L:
              color = "orange";
              break;
            case PieceShape.O:
              color = "yellow";
              break;
            case PieceShape.S:
              color = "green";
              break;
            case PieceShape.Z:
              color = "red";
              break;
            case PieceShape.T:
              color = "purple";
              break;
            default:
              color = "black";
              break;
          }
          return (
            <div
              key={index}
              id={key}
              className="tile"
              style={{ backgroundColor: color }}
            >
              <style jsx>{`
                .tile {
                  height: 20px;
                  width: 20px;
                }
              `}</style>
            </div>
          );
        });
    }
  }, [field, width, height, activePiece]);

  return (
    <div className="board">
      {tiles}
      <style jsx>{`
        .board {
          width: ${width * 20}px;
          height: ${(height - 2) * 20}px;

          display: grid;
          grid-template-columns: repeat(${width}, 20px);
          grid-template-rows: repeat(${height - 2}, 20px);
        }
      `}</style>
    </div>
  );
};
