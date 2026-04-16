const http = require("node:http");

const fetchUserData = async() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ nid: 101, username: "john_doe", theme: "dark" });
		}, 500);
	});
};

