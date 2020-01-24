import Link from "next/link";
import { NextPage } from "next";

interface Props {}

const HomePage: NextPage<Props> = ({}) => {
  return (
    <>
      <h1>Welcome to Tetris.</h1>
      <Link href="/game">
        <a>Play!</a>
      </Link>
    </>
  );
};

export default HomePage;
