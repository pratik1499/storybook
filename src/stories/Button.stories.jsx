import { Button } from "../components/Button";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import { fn } from "@storybook/test";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Click Me",
  onClick: fn(),
};
Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");

  // Simulate hover
  await userEvent.hover(button);

  // Simulate click
  await userEvent.click(button);
  await expect(args.onClick).toHaveBeenCalled();
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  label: "Loading Button",
  primary: true,
};
Loading.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");

  // Verify button is disabled while loading
  await expect(button).toBeDisabled();
  // Verify loading spinner is visible
  await expect(button.querySelector(".button__spinner")).toBeInTheDocument();
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Disabled Button",
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");

  // Verify button is disabled
  await expect(button).toBeDisabled();

  // Try to click (should not trigger onClick)
  await userEvent.click(button);
};
