import { Form } from "@remix-run/react";
import { ChangeEvent, useState } from "react";

export const enum RegisterDetails {
    name = "name",
    surname = "surname",
    fatherName = "father_name",
    city = "city",
    gender = "gender",
    login = "login",
    password = "password"
}

const RegisterForm = () => {

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
				<h2 className="text-2xl font-bold mb-6">Регистрация</h2>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Имя
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="user_name"
						type="text"
						placeholder="Иван"
						name={ RegisterDetails.name }
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Фамилия
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="user_surname"
						type="text"
						placeholder="Иванов"
						name={ RegisterDetails.surname }
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Отчество
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="user_fathername"
						type="text"
						placeholder="Иванович"
						name={ RegisterDetails.fatherName }
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Город
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="user_city"
						type="text"
						placeholder="Москва"
						name={ RegisterDetails.city }
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Пол
					</label>
					<select
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="gender"
						name={ RegisterDetails.gender }
					>
						<option value="">Выберите пол</option>
						<option value="male">Мужской</option>
						<option value="female">Женский</option>
					</select>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="user_email"
						type="email"
						placeholder="no-reply@itmo.ru"
						name={ RegisterDetails.login }
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Пароль
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="user_password"
						type="password"
						name={ RegisterDetails.password }
						value={ registerDetails.password }
						onChange={ handleChange }
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Повторите Пароль
					</label>
					<input
						className={`shadow appearance-none border ${
							isPasswordMatch ? "rounded" : "border-red-500"
						} w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
						id="user_repeat_password"
						type="password"
						name="repeatPassword"
						value={ registerDetails.repeatPassword }
						onChange={ handleChange }
					/>
					{!isPasswordMatch && (
						<p className="text-red-500 text-xs italic">Пароли не совпадают</p>
					)}
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
              Зарегестрироваться
					</button>
				</div>
			</Form>
		</div>
	);
};

export default RegisterForm;