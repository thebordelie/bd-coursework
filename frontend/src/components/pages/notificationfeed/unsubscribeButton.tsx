import { useNavigate } from "@remix-run/react";

const UnsubscribeButton: React.FC<{ id: string }> = ({ id }: { id: string }) => {
	const navigate = useNavigate();
	return (
		<button 
			onClick={() => {
				navigate("/unsubscribe/" + id)
			}}
			className="mt-2 bg-orange-500 min-w-64 text-white mx-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue">
        Отписаться от события
		</button>
	);
};
  
export default UnsubscribeButton;