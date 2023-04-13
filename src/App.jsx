import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App h-full w-full flex flex-col mx-auto ">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
