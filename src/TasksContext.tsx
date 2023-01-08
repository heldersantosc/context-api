import { createContext, useReducer } from "react";
import { initialTasks } from "./initialTasks";
import { tasksReducer } from "./TasksReducer";

export const TasksContext = createContext(initialTasks);
export const TasksDispatchContext = createContext(tasksReducer);
export let dispatchProvider: any;

export function TasksProvider({ children }: any) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  dispatchProvider = dispatch;

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
}
