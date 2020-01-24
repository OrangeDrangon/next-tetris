import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect } from "react";
import { addNextPieces } from "../redux/reducers/game";
import { getBag } from "../util/getBag";

interface Props {}

const GamePage: NextPage<Props> = ({}) => {
  const nextPieces = useSelector((state: RootState) => state.game.nextPieces);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(addNextPieces(getBag()));
  }, []);
  return (
    <div>
      {nextPieces?.map((e) => (
        <div>{e.tiles.toString()}</div>
      ))}
    </div>
  );
};

export default GamePage;
