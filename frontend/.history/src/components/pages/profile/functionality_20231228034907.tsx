
const ButtonGroup = () => {
	return (
		<div className="flex flex-col space-y-2">
			<button className="bg-indigo-500 min-w-48 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-blue">
          Создать команду
			</button>
			<button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-green">
          Судейство
			</button>
			<button className="bg-indigo-500 min-w-64 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
          Организовать мероприятие
			</button>
			<button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-red">
          Благотворительность
			</button>
		</div>
	);
};
  
export default ButtonGroup;