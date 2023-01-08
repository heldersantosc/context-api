import { useState } from "react";
import { dispatchProvider } from "./TasksContext";

export default function AddTask() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatchProvider({ type: "add", text });
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
