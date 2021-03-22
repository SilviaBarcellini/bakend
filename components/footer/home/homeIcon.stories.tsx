import { Story, Meta } from "@storybook/react/types-6-0";
import HomeIcon, { HomeIconProps } from "./homeIcon";

export default {
  title: "Common/HomeIcon",
  component: HomeIcon,
} as Meta;

const Template: Story<HomeIconProps> = (args) => <HomeIcon {...args} />;

export const homeIcon = Template.bind({});
homeIcon.args = {
  imgSrc: "/home.svg",
};
