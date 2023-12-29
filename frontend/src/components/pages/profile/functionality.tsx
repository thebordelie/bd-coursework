import { useLoaderData, useNavigate } from "@remix-run/react";

const ButtonGroup = () => {

	const { role } = useLoaderData<{role: string}>();
	const navigate = useNavigate();

	return (
		<div className="flex flex-col space-y-2 max-w-64">
			{ role === "Default" 
				? <button className="bg-indigo-500 min-w-64 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-blue">
			Создать команду
				</button>
				: <button
					onClick={() => {
						navigate("/organize");
					}} 
					className="bg-indigo-500 min-w-64 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
			Организовать мероприятие
				</button>}
		</div>
	);
};
  
export default ButtonGroup;