import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavActions, NavLinks, NavLogo, NavMenus, Nav, Button } from "sylica";

const meta: Meta<typeof Nav> = {
  title: "Navbar",
  component: Nav,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Basic: Story = {
  args: {
    children: [
      <NavLogo key="logo">Logo</NavLogo>,
      <NavLinks key="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </NavLinks>,
    ],
  },
};

export const WithLogoAndActions: Story = {
  args: {
    children: [
      <NavLogo>Logo</NavLogo>,

      <NavLinks>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </NavLinks>,

      <NavActions>
        <Button size="small" justify="center" primary>
          Dashboard
        </Button>
        <Button size="small" justify="center">
          Sign out
        </Button>
      </NavActions>,
    ],
  },
};
