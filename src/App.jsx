import { Suspense } from "react";
import "./App.css";
// import Jokes from "./components/Jokes";
// import Posts from "./components/Posts";
import Messages from "./components/Messages";

function App() {
  return (
    <Suspense fallback={<h2 className="text-2xl">loading...</h2>}>
      {/* <Jokes /> */}
      {/* <Posts /> */}
      <Messages />
    </Suspense>
  );
}

export default App;
