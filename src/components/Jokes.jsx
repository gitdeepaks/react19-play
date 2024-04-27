import { use } from "react";

const fetcher = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

const jokes = () => {
  const joke = use(fetcher());
  return <div>{joke.value}</div>;
};

export default jokes;
