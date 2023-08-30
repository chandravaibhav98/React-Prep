import React, { useState } from 'react';


export default function Family({ familytree }) {
	const [isVisible, setIsVisible] = useState(false);
	const expand = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div style={{ padding: '10' }}>
			<span onClick={expand}>{familytree.name}</span>
			{isVisible ? (
				familytree?.chilren?.map((child) => {
					return (
						<div style={{ paddingLeft: 10 }}>
							<Family familytree={child} />
						</div>
					);
				})
			) : (
				<></>
			)}
		</div>
	);
}
