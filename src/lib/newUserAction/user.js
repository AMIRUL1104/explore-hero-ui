import fs from "fs";
import usersData from "@/data/users.json";
async function getUsers() {
  return usersData;
}

export default getUsers;

export async function postUser(newUser) {
  newUser.id = usersData.length + 1;

  fs.writeFileSync(
    "./src/data/users.json",
    JSON.stringify([...usersData, newUser]),
  );
  return { ok: true, maessage: "task added" };
}
