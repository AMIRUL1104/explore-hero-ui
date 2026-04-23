import { Button } from "@heroui/react";
import getTasks from "@/lib/task";
import createAtask from "@/lib/action";
import TaskCard from "@/components/Navbar/TaskCard";
import AddTask from "@/components/AddTask";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
      <main>
        <h1>tasks : {tasks.length} </h1>
        <AddTask createATask={createAtask}></AddTask>

        {/* show all tasks in ui */}
        <div className=" mx-4 grid sm:grid-cols-3  gap-2.5">
          {tasks.map((data) => (
            <TaskCard key={data.id} data={data} />
          ))}
        </div>
        <h1>explore hero ui and components</h1>
        <Button variant="primary">click me</Button>
      </main>
    </div>
  );
}
