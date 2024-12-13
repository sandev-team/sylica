import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@sylica/forms";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodoc"],
  parameters: {
    doc: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    onInputChange: (e: { target: { value: any } }) =>
      console.log("Input changed:", e.target.value),
  },
};

export const Small: Story = {
  args: {
    placeholder: "Small input",
    onInputChange: (e: { target: { value: any } }) =>
      console.log("Input changed:", e.target.value),
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large input",
    onInputChange: (e: { target: { value: any } }) =>
      console.log("Input changed:", e.target.value),
  },
};

export const WithValue: Story = {
  args: {
    value: "Pre-filled value",
    onInputChange: (e: { target: { value: any } }) =>
      console.log("Input changed:", e.target.value),
  },
};

export const CustomStyle: Story = {
  args: {
    placeholder: "Custom styled input",
    className: "custom-input-class",
    onInputChange: (e: { target: { value: any } }) =>
      console.log("Input changed:", e.target.value),
  },
};
