"use server";
import { revalidatePath } from "next/cache";
import { postUser } from "./user";
import { redirect } from "next/navigation";

const addNewUser = async (formData) => {
  const newUser = Object.fromEntries(formData.entries());
  const res = await postUser(newUser);
  if (res.ok) {
    revalidatePath("/userslist");
    redirect("/userslist");
  }
  return res;
};

export default addNewUser;
