import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Text {...args}>Text</Text>
    </StorybookContainer>
  ),
};

export const PredefinedFontWeight: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Text {...args}>Text</Text>
      <Text {...args} weight="bold">
        Text
      </Text>
    </StorybookContainer>
  ),
};

export const Color: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Text {...args}>Text</Text>
      <Text {...args} color="#800080">
        Text
      </Text>
    </StorybookContainer>
  ),
};

export const CustomFontWeight: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Text {...args}>Text</Text>
      <Text {...args} fontWeight={900}>
        Text
      </Text>
    </StorybookContainer>
  ),
};

export const FontSize: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Text {...args}>Text</Text>
      <Text {...args} fontSize="30px">
        Text
      </Text>
    </StorybookContainer>
  ),
};

export const FontFamily: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Text {...args}>Text</Text>
      <Text {...args} fontFamily="Arial">
        Text
      </Text>
    </StorybookContainer>
  ),
};
