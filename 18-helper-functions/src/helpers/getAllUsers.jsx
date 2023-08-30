export const getUsers = (param) => {
	return fetch(`https://jsonplaceholder.typicode.com/${param}`)
		.then((res) => res.json)
		.then((json) => console.log(json));
};
