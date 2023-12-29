import cat1 from "./cat1.png";
import cat2 from "./cat2.jpeg";
import cat3 from "./cat3.jpeg";

const AuthorsInfo: React.FC = () => {
	return (
		<div className="bg-gray-200 py-10 h-full flex items-center justify-center relative z-20">
			<div className="container mx-auto text-center size-full">
				<h2 className="text-3xl font-bold mb-6">Авторы</h2>
				<div>
					<div className="flex items-start justify-center">
						<div className="flex-shrink-0">
							<img
								src={cat2}
								alt="Author 1"
								className="w-16 h-16 rounded-full object-cover"
							/>
						</div>
						<div className="ml-4">
							<p className="text-lg font-semibold">Ромайкин Эрик</p>
							<p className="text-gray-600">336187</p>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<div className="flex items-start justify-center">
						<div className="flex-shrink-0">
							<img
								src={cat1}
								alt="Author 2"
								className="w-16 h-16 rounded-full object-cover"
							/>
						</div>
						<div className="ml-4">
							<p className="text-lg font-semibold">Керпик Артем</p>
							<p className="text-gray-600">335069</p>
						</div>
					</div>
				</div>
				<h2 className="text-3xl font-bold mb-6 mt-20">Преподаватель</h2>
				<div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
					<div className="flex-shrink-0">
						<img
							src={cat3}
							alt="Author 1"
							className="w-16 h-16 rounded-full object-cover"
						/>
					</div>
					<div>
						<p className="text-lg font-semibold">Гаврилов А.В</p>
						<p className="text-gray-600">105394</p>
					</div>
				</div>
			</div>
		</div>
	);
};
  
export default AuthorsInfo;