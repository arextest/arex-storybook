import { TooltipButton } from './TooltipButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Example/TooltipButton',
    component: TooltipButton,
    tags: ['autodocs'],
    argTypes: {
        title:"我是标题啊",
        color:"primary",
        children:"摸我"
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        title:"我是例子",
        color:"text",
        children:"sei nei！"
    },
};
