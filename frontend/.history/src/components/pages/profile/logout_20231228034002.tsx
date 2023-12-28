const LogoutButton = ({ onClick }) => {
	return (
		<button
			className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
			onClick={onClick}
		>
        Выйти
		</button>
	);
};
  
export default LogoutButton;