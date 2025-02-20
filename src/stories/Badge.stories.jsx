import { Badge } from "./Badge";
import { Button } from "./Button";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    count: { control: "number" },
    status: {
      control: {
        type: "select",
        options: ["success", "warning", "error", "default"],
      },
    },
    dot: { control: "boolean" },
  },
};

export const WithCount = () => (
  <Badge count={5}>
    <Button label="Messages" />
  </Badge>
);

export const WithDot = () => (
  <Badge dot status="success">
    <Button label="Notifications" />
  </Badge>
);

export const DifferentStatuses = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <Badge dot status="success">
      <Button label="Success" />
    </Badge>
    <Badge dot status="warning">
      <Button label="Warning" />
    </Badge>
    <Badge dot status="error">
      <Button label="Error" />
    </Badge>
    <Badge dot status="default">
      <Button label="Default" />
    </Badge>
  </div>
);

export const WithNumbers = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <Badge count={5}>
      <Button label="Messages" />
    </Badge>
    <Badge count={99}>
      <Button label="Notifications" />
    </Badge>
    <Badge count={1000}>
      <Button label="Updates" />
    </Badge>
  </div>
);
