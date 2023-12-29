const RegisterForm = () => {
  
	return (
		<div className="min-h-screen flex items-center justify-center">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<h2 className="text-2xl font-bold mb-6">Register</h2>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						placeholder="Enter your username"
						name="username"
						value={formData.username}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Enter your email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="Enter your password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						onClick={handleSubmit}
					>
              Register
					</button>
				</div>
			</form>
		</div>
	);
};
  
export default RegisterForm;