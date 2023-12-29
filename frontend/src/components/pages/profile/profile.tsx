import { useLoaderData } from "@remix-run/react";
import { loader as ProfileLoader } from "~/routes/profile";

const UserProfile: React.FC = () => {

	const loaderProps = useLoaderData<typeof ProfileLoader>();

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Ваш профиль</h2>
			<div className="mb-4">
				<h1 className="text-gray-700 font-semibold">ФИО:</h1>
				<p className="text-gray-800">{loaderProps.fullname}</p>
			</div>
			<div className="mb-4">
				<h1 className="text-gray-700 font-semibold">Пол:</h1>
				<p className="text-gray-800">{loaderProps.gender === "male" ? "Мужской" : "Женский"}</p>
			</div>
			<div className="mb-4">
				<h1 className="text-gray-700 font-semibold">Город:</h1>
				<p className="text-gray-800">{loaderProps.city}</p>
			</div>
			<div>
				<h1 className="text-gray-700 font-semibold">Роль:</h1>
				<p className="text-gray-800">{loaderProps.role === "Default" ? "Участник" : "Организатор"}</p>
			</div>
		</div>
	);
};
  
export default UserProfile;