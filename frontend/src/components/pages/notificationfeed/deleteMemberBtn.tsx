import { useNavigate } from "@remix-run/react";

const DeleteMemberBtn: React.FC<{ id: string }> = ({ id }: { id: string }) => {
	const navigate = useNavigate();
	return (
		<button 
			onClick={() => {
				navigate("/stopParticipating/" + id)
			}}
			className="mt-2 bg-orange-600 min-w-64 text-white mx-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue">
        Не участвовать
		</button>
	);
};
  
export default DeleteMemberBtn;