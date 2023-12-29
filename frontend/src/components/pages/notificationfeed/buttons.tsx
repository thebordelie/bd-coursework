import { useNavigate } from "@remix-run/react";

const OptionButtons: React.FC<{ id: string }> = ({ id }: { id: string }) => {
	const navigate = useNavigate();
	return (
		<>
			<button 
				onClick={() => {
					navigate("/participate/" + id)
				}}
				className="mt-2 bg-indigo-500 min-w-40 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-blue">
			Участвовать
			</button>
			<button 
				onClick={() => {
					navigate("/watchevent/" + id)
				}}
				className="mt-2 bg-indigo-500 min-w-40 text-white mx-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-blue">
			Стать зрителем
			</button>
		</>
	);
};
  
export default OptionButtons;