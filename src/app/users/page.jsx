"use client";

import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

import addNewUser from "@/lib/newUserAction/action";

function Users() {
  return (
    <div className="flex text-black mx-5 my-7 items-center justify-center rounded-3xl bg-surface p-6">
      <Surface className="w-full min-w-95">
        <Form action={addNewUser}>
          <Fieldset className="w-full">
            <Fieldset.Legend>Profile Settings</Fieldset.Legend>
            <Description>Update your profile information.</Description>

            <Fieldset.Group>
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }

                  return null;
                }}
              >
                <Label>Name</Label>
                <Input placeholder="John Doe" variant="secondary" />
                <FieldError />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" variant="secondary" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                name="bio"
                validate={(value) => {
                  if (value.length < 10) {
                    return "Bio must be at least 10 characters";
                  }

                  return null;
                }}
              >
                <Label>Bio</Label>
                <TextArea
                  placeholder="Tell us about yourself..."
                  variant="secondary"
                />
                <Description>Minimum 10 characters</Description>
                <FieldError />
              </TextField>
            </Fieldset.Group>

            <Fieldset.Actions>
              <Button type="submit">Save changes</Button>
              <Button type="reset" variant="tertiary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  );
}

export default Users;
