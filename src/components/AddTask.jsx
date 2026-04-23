import { Button, Label, ListBox, Select } from "@heroui/react";

async function AddTask({ createATask }) {
  return (
    <div className=" flex items-center flex-col justify-center my-7">
      <form action={createATask} className=" border rounded-sm p-2.5">
        <label htmlFor="title">title</label>
        <input type="text" name="title" className=" m-5 border" />
        <br />
        <label htmlFor="details">details</label>
        <input type="text" name="details" className=" m-5 border" />
        <br />
        <Select name="priority" className="w-[256px]" placeholder="Select one">
          <Label>priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low" textValue="low">
                low
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium," textValue="medium">
                medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="high" textValue="high">
                high
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default AddTask;
