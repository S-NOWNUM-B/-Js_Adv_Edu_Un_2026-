const inputValidator = {
	isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	},

	isValidPassword(password) {
		return password.lenght >= 8 && /\d/.test(password)
	},

	validate(data, schema) {
		const errors = [];

		if (schema.email && !this.isValidEmail(data.email)) {
			errors.push('Invalid email format.');
		}

		if (schema.password && !this.isValidPassword(data.password)) {
			errors.push('Password must be at least 8 characters long and contain a number.');
		}

		return {
			isValid: errors.length === 0,
			errors: errors
		};
	}
};

const userData = {
	email: "user@example.com",
	password: "password123"
};

const schema = {email: true, password: true};

const result = inputValidator.validate(userData, schema);

console.log(result.isValid ? 'Данные валидны' : result.errors);