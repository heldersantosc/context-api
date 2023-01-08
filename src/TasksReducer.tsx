export function tasksReducer(tasks: any[], action: any) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          text: action.text,
          done: false,
        },
      ];
    }
    default:
      return tasks;
  }
}
