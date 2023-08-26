import React from 'react';

const ChildComponent = ({ name, changeName }) => {
	return (
		<div>
			<br />
			<hr />
			<div>
				<h3>ChildComponent</h3>
				<h4>{name}</h4>
				<button
					onClick={() =>
						changeName(
							'changeName Passed from App to ChildComponent',
						)
					}>
					changeName
				</button>
			</div>
			<hr />
		</div>
	);
};

export default ChildComponent;
