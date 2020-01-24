import { NextPage } from "next";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect } from "react";
import { addNextPieces, stepDownActivePiece } from "../redux/reducers/game";
import { getBag } from "../util/getBag";
import { Field } from "../components/Field";

interface Props {}

const GamePage: NextPage<Props> = ({}) => {
  const nextPieces = useSelector((state: RootState) => state.game.nextPieces);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(addNextPieces(getBag()));
    const tick = setInterval(() => dispatch(stepDownActivePiece()), 100);
    return () => {
      clearInterval(tick);
    };
  }, []);
  useEffect(() => {
    if (nextPieces.length < 6) {
      dispatch(addNextPieces(getBag()));
    }
  }, [nextPieces]);
  return (
    <div>
      <Field />
    </div>
  );
};

export default GamePage;
