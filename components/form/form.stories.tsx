import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Form from "./form";
import FormProps from "./form";

export default {
  title: "Common/Form",
  component: Form,
} as Meta;

const Template: Story<typeof FormProps> = (args) => <FormProps {...args} />;

export const form = Template.bind({});
form.args = {
  itemRequired: "",
};
