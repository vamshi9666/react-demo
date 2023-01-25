import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const messages = new Array(50).fill(0).map((_, index) => {
  return {
    id: index + 1,
    body: "message   $###" + index.toString(),
  };
});

function App() {
  return (
    <div className="App">
      <h3>Messages list</h3>
      {messages.map((eachMessage) => {
        return <p key={eachMessage.id}>{eachMessage.body}</p>;
      })}
    </div>
  );
}

export default App;
