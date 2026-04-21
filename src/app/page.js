import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center dark:text-white text-black  bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>explore hero ui and components</h1>
        <Button variant="primary">click me</Button>
      </main>
    </div>
  );
}
