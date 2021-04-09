import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Header, { HeaderProps } from "./header";

export default {
  title: "Common/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {
  logo: "bakend",
  imageSrc: "/donuts.svg",
};
