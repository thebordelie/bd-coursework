const MainPage: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-8">Музыкальные Конкурсы</h1>
			<div className="flex space-x-4">
				<button className="bg-blue-500 text-white px-4 py-2 rounded">Button 1</button>
				<button className="bg-green-500 text-white px-4 py-2 rounded">Button 2</button>
			</div>
		</div>
	);
};
  
export default MainPage;