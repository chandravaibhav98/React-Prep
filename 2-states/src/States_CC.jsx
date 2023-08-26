import React, { Component } from 'react';

export default class States_CC extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Vaibhav',
			age: 24,
		};
	}
	render() {
		return (
			<div>
				<h1>States Class Component</h1>
				<h2>state.name-{this.state.name}</h2>
			</div>
		);
	}
}
