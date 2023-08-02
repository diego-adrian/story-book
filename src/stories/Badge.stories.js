import { Badge } from "./Badge";

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color'}
  }
};


export const Primary = {
  args: {
    primary: true
  }
}

export const Secondary = {
  args: {
    primary: false
  }
}