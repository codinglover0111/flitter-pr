import type { Meta, StoryObj } from '@storybook/svelte';
import Widget from '../../Widget.svelte';
import { BasicStory } from './examples/index.js';

const meta = {
	title: 'Animation/AnimationController',
	component: Widget,
	parameters: {
		layout: 'fullscreen'
	},
	args: {
		width: '400px',
		height: '400px'
	}
} satisfies Meta<Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: BasicStory
};
