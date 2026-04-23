import fs from "fs";
import tasks from "@/data/tasks.json";
async function getTasks() {
  return tasks;
}

export default getTasks;

export const postTask = async (newTask) => {
  newTask.id = tasks.length + 1;
  fs.writeFileSync(
    "./src/data/tasks.json",
    JSON.stringify([...tasks, newTask]),
  );
  return { ok: true, maessage: "task added" };
};
