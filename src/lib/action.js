"use server";
import { revalidatePath } from "next/cache";
import { postTask } from "./task";
import { redirect } from "next/navigation";

const createATask = async (formData) => {
  // const title = formData.get("title");
  // const details = formData.get("details");
  // const priority = formData.get("priority");

  // const newTask = {
  //   title,details,priority
  // }

  const newTask = Object.fromEntries(formData.entries());
  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/");
  }
  console.log(newTask);
  return res;
};
export default createATask;
