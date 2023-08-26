import React, { Component } from 'react';

export default class States_CC extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Vaibhav',
			age: 24,
			array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		};
	}
	changeStatus = () => {
		this.setState({
			age: this.state.age + 1,
			name: 'chandravaibhav98',
		});
		console.log(`Age+1: ${this.state.age}`);
	};
	render() {
		return (
			<div>
				<h1>States Class Component</h1>
				<h3>state.name-{this.state.name}</h3>
				<h3>state.age-{this.state.age}</h3>
				<h3>
					state.array-
					{this.state.array.map((item) => {
						return item;
					})}
				</h3>
				<button onClick={this.changeStatus}>Change Status</button>
			</div>
		);
	}
}
