import { Form } from "@remix-run/react";

const EventForm = () => {
  
	return (
		<Form className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-8">
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="type"
					type="text"
					placeholder="Type"
					name="type"
				/>
			</div>
  
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cityName">
            City Name
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="cityName"
					type="text"
					placeholder="City Name"
					name="cityName"
				/>
			</div>
  
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="date"
					type="date"
					name="date"
				/>
			</div>
  
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
            Event Name
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="eventName"
					type="text"
					placeholder="Event Name"
					name="eventName"
				/>
			</div>
  
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
            Street
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="street"
					type="text"
					placeholder="Street"
					name="street"
				/>
			</div>
  
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="house">
            House
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="house"
					type="text"
					placeholder="House"
					name="house"
				/>
			</div>
  
			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
            Submit
				</button>
			</div>
		</Form>
	);
};
  
export default EventForm;