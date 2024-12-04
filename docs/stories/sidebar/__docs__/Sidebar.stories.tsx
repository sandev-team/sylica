import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../../sylica/src/components/sidebar";

const meta: Meta<typeof SidebarProvider> = {
  title: "Sidebar",
  component: SidebarProvider,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarProvider>;

const items = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Inbox",
    url: "#",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
];

export const Basic: Story = {
  args: {
    children: [
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>,

      <main>
        <SidebarTrigger></SidebarTrigger>
      </main>,
    ],
  },
};
