import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../../lib/Board";
import { Piece, RotationDirection } from "../../lib/Piece";
import { Vector } from "../../lib/Vector";
import { Bag } from "../../util/getBag";

interface InitialState {
  board: Board;
  activePiece?: Piece;
  activePieceShadow?: Piece;
  nextPieces?: Bag;
  heldPiece?: Piece;
  canHold: boolean;
}

const initialState: InitialState = {
  board: new Board(),
  canHold: true,
};

const slice = createSlice({
  initialState,
  name: "game",
  reducers: {
    holdActivePiece: (state) => {
      if (state.canHold) {
        const held = state.heldPiece?.translate(new Vector(0, 0));
        state.heldPiece = state.activePiece;

        if (held != null) {
          state.activePiece = held;
        } else if (state.nextPieces != null) {
          state.activePiece = state.nextPieces.shift();
        } else {
          state.activePiece = undefined;
        }
        state.canHold = false;
      }
    },
    rotateActivePiece: (
      state,
      { payload }: PayloadAction<RotationDirection>
    ) => {
      state.activePiece = state.activePiece?.rotate(state.board, payload, true);
    },
    stepDownActivePiece: (state) => {
      if (state.activePiece != null) {
        const translated = state.activePiece.translate(new Vector(0, -1));
        const doesFit = state.board.tilesDoFit(translated.tiles);

        if (doesFit) {
          state.activePiece = translated;
        } else {
          state.board = state.board.addPiece(
            state.activePiece.translate(new Vector(0, 0))
          );
          state.activePiece = state.nextPieces?.shift();
          state.canHold = true;
        }
      }
    },
    addNextPieces: (state, { payload }: PayloadAction<Bag>) => {
      state.nextPieces = state.nextPieces?.concat(payload);
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
