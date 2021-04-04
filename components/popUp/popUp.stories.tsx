import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PopUp, { PopUpProps } from "./popUp";

export default {
  title: "Common/PopUp",
  component: PopUp,
} as Meta;

const Template: Story<PopUpProps> = (args) => <PopUp {...args} />;

export const popUp = Template.bind({});
popUp.args = {
  label: "Back",
  handleClose: "X",
  content: "hey, this is a pop up!!",
};
