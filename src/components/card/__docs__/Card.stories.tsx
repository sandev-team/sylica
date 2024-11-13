import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "../Card"; // Adjust the path as needed
import { Button } from "../../button";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Default Card",
    content: "This is a default card with simple content.",
    footer: (
      <>
        <Button size="small">Action 1</Button>
      </>
    ),
  },
};

export const MultiElementInFooter: Story = {
  args: {
    title: "Default Card",
    content: "This is a default card with simple content.",
    footer: (
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <Button size="small" primary>
          Action 1
        </Button>
        <Button size="small">Action 2</Button>
      </div>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    title: "Custom Content Card",
    content: (
      <div>
        <p>This card contains custom content including a list:</p>
        <ul>
          <li>Custom Item 1</li>
          <li>Custom Item 2</li>
          <li>Custom Item 3</li>
        </ul>
      </div>
    ),
    footer: (
      <button style={{ backgroundColor: "#333", color: "#fff" }}>
        Custom Footer Action
      </button>
    ),
  },
};

export const NoFooter: Story = {
  args: {
    title: "Card Without Footer",
    content: "This card has no footer. It's just the header and body content.",
  },
};
