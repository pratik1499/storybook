import { TextField } from "./TextField";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    variant: {
      control: { type: "select", options: ["outlined", "filled", "standard"] },
    },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => <TextField {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Name",
  placeholder: "Enter your name",
  variant: "outlined",
};
Outlined.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox");

  await userEvent.type(input, "John Doe", { delay: 100 });
  await expect(input.value).toBe("John Doe");
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Email",
  placeholder: "Enter your email",
  variant: "filled",
};
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox");

  await userEvent.type(input, "john@example.com", { delay: 100 });
  await expect(input.value).toBe("john@example.com");
};

export const Standard = Template.bind({});
Standard.args = {
  label: "Username",
  placeholder: "Enter username",
  variant: "standard",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Field",
  placeholder: "This field is disabled",
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox");

  await expect(input).toBeDisabled();
};
