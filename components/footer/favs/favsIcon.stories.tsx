import { Story, Meta } from "@storybook/react/types-6-0";
import FavsIcon, { FavsIconProps } from "./favsIcon";

export default {
  title: "Common/favsIcon",
  component: FavsIcon,
} as Meta;

const Template: Story<FavsIconProps> = (args) => <FavsIcon {...args} />;

export const favsIcon = Template.bind({});
favsIcon.args = {
  imgSrc: "/heartf.svg",
};
