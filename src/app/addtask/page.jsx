import { Button } from "@heroui/react";

async function AddTaskPage() {
  return (
    <div className=" flex items-center flex-col justify-center my-7">
      <form action="">
        <label htmlFor="title">title</label>
        <input type="text" name="title" className=" m-5 border" />
        <br />
        <label htmlFor="details">details</label>
        <input type="text" name="details" className=" m-5 border" />
        <br />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default AddTaskPage;
