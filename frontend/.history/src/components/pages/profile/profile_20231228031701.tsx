
const UserProfile: React.FC = ({ fullname, gender, city, role }) => {
	return (
		<div className="bg-white p-4 shadow rounded-md">
			<h2 className="text-2xl font-bold mb-4">User Profile</h2>
			<div className="mb-4">
				<label className="text-gray-700 font-semibold">Full Name:</label>
				<p className="text-gray-800">{fullname}</p>
			</div>
			<div className="mb-4">
				<label className="text-gray-700 font-semibold">Gender:</label>
				<p className="text-gray-800">{gender}</p>
			</div>
			<div className="mb-4">
				<label className="text-gray-700 font-semibold">City:</label>
				<p className="text-gray-800">{city}</p>
			</div>
			<div>
				<label className="text-gray-700 font-semibold">Role:</label>
				<p className="text-gray-800">{role}</p>
			</div>
		</div>
	);
};
  
export default UserProfile;