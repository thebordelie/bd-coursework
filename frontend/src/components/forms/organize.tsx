import { Form, useActionData, useNavigation } from "@remix-run/react";

export const OrganizeDetails = {
	name: "name",
	type: "type",
	cityName: "cityName",
	date: "date",
	street: "street",
	house: "house"
}

const EventForm = () => {

	const actionData = useActionData<{ errors: typeof OrganizeDetails }>();
	const navigation = useNavigation();
  
	return (
		<Form method="post" className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-8">
			<div>
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
            Название Мероприятия
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="eventName"
					type="text"
					placeholder="Название Мероприятия"
					name={ OrganizeDetails.name }
				/>
			</div>
			{actionData?.errors.name !== "" && (
				<p className="text-red-500 text-xs italic">{ actionData?.errors.name }</p>
			)}

			<div className="mt-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Музыкальный инструмент
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="type"
					type="text"
					placeholder="Музыкальный инструмент"
					name={ OrganizeDetails.type }
				/>
			</div>
			{actionData?.errors.type !== "" && (
				<p className="text-red-500 text-xs italic">{ actionData?.errors.type }</p>
			)}
  
			<div className="mt-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Дата
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="date"
					type="date"
					name={ OrganizeDetails.date }
				/>
			</div>
			{actionData?.errors.date !== "" && (
				<p className="text-red-500 text-xs italic">{ actionData?.errors.date }</p>
			)}

			<div className="mt-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cityName">
            Город
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="cityName"
					type="text"
					placeholder="City"
					name={ OrganizeDetails.cityName }
				/>
			</div>
			{actionData?.errors.cityName !== "" && (
				<p className="text-red-500 text-xs italic">{ actionData?.errors.cityName }</p>
			)}
  
			<div className="mt-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
            Улица
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="street"
					type="text"
					placeholder="Улица"
					name={ OrganizeDetails.street }
				/>
			</div>
			{actionData?.errors.street !== "" && (
				<p className="text-red-500 text-xs italic">{ actionData?.errors.street }</p>
			)}
  
			<div className="mt-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="house">
            Строение
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="house"
					type="text"
					placeholder="Строение"
					name={ OrganizeDetails.house }
				/>
			</div>
			{actionData?.errors.house !== "" && (
				<p className="text-red-500 text-xs italic">{ actionData?.errors.house }</p>
			)}
  
			<div className="mt-4 flex items-center justify-between">
				<button
					disabled={ navigation.state === "submitting" }
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
            Создать
				</button>
			</div>
		</Form>
	);
};
  
export default EventForm;