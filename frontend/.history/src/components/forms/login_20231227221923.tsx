import { Form, useActionData } from "@remix-run/react";
import { ChangeEvent, useState } from "react";

const LoginDetails = {
	login: "login",
	password: "password"
}

const RegisterForm = () => {

	const actionData = useActionData<{ errors: typeof LoginDetails }>();

	const [registerDetails, setRegisterDetails] = useState({
		password: "",
		repeatPassword: "",
	});
    
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setRegisterDetails({
			...registerDetails,
			[name]: value,
		});
	};

	const isPasswordMatch = registerDetails.password === registerDetails.repeatPassword
        || registerDetails.repeatPassword === "";
  
	return (
		<div className="min-h-screen flex items-center justify-center">
			<Form method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<h2 className="text-2xl font-bold mb-6">Войти</h2>
				<div className="mt-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="user_email"
						type="email"
						placeholder="no-reply@itmo.ru"
						name={ LoginDetails.login }
					/>
				</div>
				{actionData?.errors.login !== "" && (
					<p className="text-red-500 text-xs italic">{ actionData?.errors.login }</p>
				)}
				<div className="mt-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Пароль
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="user_password"
						type="password"
						name={ LoginDetails.password }
						value={ registerDetails.password }
						onChange={ handleChange }
					/>
				</div>
				{actionData?.errors.password !== "" && (
					<p className="text-red-500 text-xs italic">{ actionData?.errors.password }</p>
				)}
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
              Войти
					</button>
				</div>
			</Form>
		</div>
	);
};

export default RegisterForm;