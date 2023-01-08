import { useState } from "react";
import { useTasks } from "./useTasks";

export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }: any) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            // dispatch.onClick();
          }}
        />
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          // dispatch.onClick();
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          // dispatch.onClick();
        }}
      >
        Delete
      </button>
    </label>
  );
}
