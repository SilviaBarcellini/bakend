import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Footer, { FooterProps } from "./footer";

export default {
  title: "Common/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {
  homeBtn: "https://image.flaticon.com/icons/png/128/1946/1946436.png",
  favsBtn: "https://image.flaticon.com/icons/png/128/535/535234.png",
};
