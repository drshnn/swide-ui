import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [st, setSt] = useState("");
  console.log(setSt);
  return (
    <div className="App h-full w-full flex flex-col mx-auto ">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
