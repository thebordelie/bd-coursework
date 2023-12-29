import { useLoaderData } from "@remix-run/react";

const UserProfile: React.FC = () => {

	const loaderProps = useLoaderData<typeof loader>();

	return (
		<div className="bg-white p-4 shadow rounded-md">
			<h2 className="text-2xl font-bold mb-4">User Profile</h2>
			<div className="mb-4">
				<h1 className="text-gray-700 font-semibold">Full Name:</h1>
				<p className="text-gray-800">{fullname}</p>
			</div>
			<div className="mb-4">
				<h1 className="text-gray-700 font-semibold">Gender:</h1>
				<p className="text-gray-800">{gender}</p>
			</div>
			<div className="mb-4">
				<h1 className="text-gray-700 font-semibold">City:</h1>
				<p className="text-gray-800">{city}</p>
			</div>
			<div>
				<h1 className="text-gray-700 font-semibold">Role:</h1>
				<p className="text-gray-800">{role}</p>
			</div>
		</div>
	);
};
  
export default UserProfile;