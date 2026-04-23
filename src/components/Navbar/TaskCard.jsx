function TaskCard({ data }) {
  return (
    <div className=" my-2.5 p-2.5 border rounded-2xl">
      <p className=" text-lg font-bold"> {data.title} </p>
      <p className=" text-[14px] text-gray-400 "> {data.description} </p>
    </div>
  );
}

export default TaskCard;
