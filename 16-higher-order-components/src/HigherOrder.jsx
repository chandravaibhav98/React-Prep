import { useState } from 'react';

export default function HigherOrder() {
	return function HOC() {
		return (
			<div>
				<h2>Higher Order</h2>
			</div>
		);
	};
}
