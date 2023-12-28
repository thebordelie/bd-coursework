const AuthorsInfo: React.FC = () => {
	return (
		<div className="bg-gray-200 py-10">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-6">Authors</h2>
				<div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
					<div className="flex-shrink-0">
						<img
							src="https://placekitten.com/100/100"  // Replace with the actual image URL
							alt="Author 1"
							className="w-16 h-16 rounded-full"
						/>
					</div>
					<div>
						<p className="text-lg font-semibold">Author 1</p>
						<p className="text-gray-600">Surname 1</p>
					</div>
					<div className="flex-shrink-0">
						<img
							src="https://placekitten.com/100/100"  // Replace with the actual image URL
							alt="Author 2"
							className="w-16 h-16 rounded-full"
						/>
					</div>
					<div>
						<p className="text-lg font-semibold">Author 2</p>
						<p className="text-gray-600">Surname 2</p>
					</div>
				</div>
			</div>
		</div>
	);
};
  
export default AuthorsInfo;