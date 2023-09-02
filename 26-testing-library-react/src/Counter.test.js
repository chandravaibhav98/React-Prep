import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Check the initial value of count', () => {
	const { getByTestId } = render(<Counter initialvalue={0} />);
	let counter = getByTestId('count').textContent;
	expect(Number(counter)).toEqual(0);
});

test('Check the Increment Button', () => {
	const { getByTestId, getByRole } = render(<Counter initialvalue={0} />);
	let counter = getByTestId('count').textContent;
	expect(Number(counter)).toEqual(0);
	let incrementBtn = getByRole('button', { name: 'count' });

	fireEvent.click(incrementBtn);
	let counterIncrement = getByTestId('count').textContent;
	expect(Number(counterIncrement)).toEqual(1);
});
