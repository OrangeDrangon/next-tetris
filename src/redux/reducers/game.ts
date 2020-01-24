import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RotationDirection, Piece, rotate, translate } from "../../lib/Piece";
import { Bag } from "../../util/getBag";
import { Board, createBoard, tilesDoFit, addPiece } from "../../lib/Board";
import { createVector } from "../../lib/Vector";

interface InitialState {
  board: Board;
  activePiece?: Piece;
  activePieceShadow?: Piece;
  nextPieces: Bag;
  heldPiece?: Piece;
  canHold: boolean;
}

const initialState: InitialState = {
  board: createBoard(),
  canHold: true,
  nextPieces: [],
};

const slice = createSlice({
  initialState,
  name: "game",
  reducers: {
    holdActivePiece: ({ canHold, heldPiece, activePiece, nextPieces }) => {
      if (canHold) {
      }
    },
    rotateActivePiece: (
      { activePiece, board },
      { payload }: PayloadAction<RotationDirection>
    ) => {
      if (activePiece != null) {
        activePiece = rotate(activePiece, board, payload);
      }
    },
    stepDownActivePiece: (state) => {
      if (state.activePiece != null) {
        const translated = translate(state.activePiece, createVector(0, -1));
        const doesFit = tilesDoFit(state.board, translated.tiles);

        if (doesFit) {
          state.activePiece = translated;
        } else {
          state.board = addPiece(state.board, state.activePiece);
          state.activePiece = state.nextPieces.shift();
          state.canHold = true;
        }
      }
    },
    addNextPieces: (state, { payload }: PayloadAction<Bag>) => {
      state.nextPieces = state.nextPieces.concat(payload);
      if (state.activePiece == null) {
        state.activePiece = state.nextPieces.shift();
      }
    },
  },
});

const { reducer, actions } = slice;

export const {
  holdActivePiece,
  rotateActivePiece,
  stepDownActivePiece,
  addNextPieces,
} = actions;
export default reducer;
