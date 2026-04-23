import tasks from "@/data/tasks.json";
async function getTasks() {
  return tasks;
}

export default getTasks;

export const postTask = async (newTask) => {
  newTask.id = tasks.length + 1;
  tasks.unshift(newTask);
  return { ok: true, massege: "task added" };
};
