import { Counter } from "./Counter";
import { within, userEvent, expect } from "@storybook/test";

export default {
  title: "Example/Counter",
  component: Counter,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    initialCount: 0,
  },
};

// This is where we define our interactions test
export const InteractionsTest = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    // Check initial state
    await step("Initial state should be 0", async () => {
      await expect(canvas.getByText("Count: 0")).toBeInTheDocument();
    });

    // Click increase button and verify count increases
    await step(
      "Clicking increase button should increment counter",
      async () => {
        await userEvent.click(canvas.getByText("Increase"));
        await expect(canvas.getByText("Count: 1")).toBeInTheDocument();
      }
    );

    // Click decrease button and verify count decreases
    await step(
      "Clicking decrease button should decrement counter",
      async () => {
        await userEvent.click(canvas.getByText("Decrease"));
        await expect(canvas.getByText("Count: 0")).toBeInTheDocument();
      }
    );
  },
};
