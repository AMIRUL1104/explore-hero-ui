import getUsers from "@/lib/newUserAction/user";

async function UsersList() {
  const users = await getUsers();

  return (
    <div className=" mx-4 grid sm:grid-cols-3  gap-2.5">
      {users.map((data) => (
        <div key={data.id} className=" my-2.5 p-2.5 border rounded-2xl">
          <p className=" text-lg font-bold"> {data.name} </p>
          <p className=" text-[14px] text-gray-400 "> {data.email} </p>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
