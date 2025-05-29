import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
    </StorybookContainer>
  ),
};

export const PredefinedType: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} type="success" />
      <Tag {...args} type="alert" />
      <Tag {...args} type="error" />
    </StorybookContainer>
  ),
};

export const PredefinedFormat: Story = {
  args: {
    format: "square",
  },
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} format="semiRounded" />
      <Tag {...args} format="rounded" />
    </StorybookContainer>
  ),
};

export const PredefinedSize: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} size="medium" />
      <Tag {...args} size="large" />
    </StorybookContainer>
  ),
};

export const Text: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} text="Example" />
    </StorybookContainer>
  ),
};

export const BackgroundColor: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} backgroundColor="#3b82f6" />
    </StorybookContainer>
  ),
};

export const CustomFormat: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} borderRadius="15px 2px" />
    </StorybookContainer>
  ),
};

export const CustomSize: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} padding="20px 40px" />
    </StorybookContainer>
  ),
};

export const TextColor: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} textColor="#000" />
    </StorybookContainer>
  ),
};

export const TextFontWeight: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} textFontWeight={100} />
    </StorybookContainer>
  ),
};

export const TextFontFamily: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} textFontFamily="Arial" />
    </StorybookContainer>
  ),
};

export const TextFontSize: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} textFontSize="20px" />
    </StorybookContainer>
  ),
};
