import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

const ArrowButtonWithState = () => {
	const handleClick = (target: EventTarget) => {
		console.log('Button clicked', target);
	};

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<ArrowButton
			onClick={handleClick}
			isMenuOpen={isMenuOpen}
			setIsMenuOpen={setIsMenuOpen}
		/>
	);
};

export const ArrowButtonStory: Story = {
	render: () => <ArrowButtonWithState />,
};
