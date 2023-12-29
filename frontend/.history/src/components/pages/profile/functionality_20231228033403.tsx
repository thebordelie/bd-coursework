
const ButtonGroup = () => {
	return (
		<div className="flex space-x-4">
			<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
          Создать команду
			</button>
			<button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
          Судейство
			</button>
			<button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
          Организовать мероприятие
			</button>
			<button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red">
          Благотворительность
			</button>
		</div>
	);
};
  
export default ButtonGroup;