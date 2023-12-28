const ProfileCard: React.FC = () => {
	return (
		<div className="bg-white p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
			<div className="col-span-2">
				<UserProfile />
			</div>
			<div className="col-span-2 flex justify-start md:justify-start lg:justify-end">
				<ButtonGroup />
			</div>
			<div className="col-span-1">
				<LogoutButton />
			</div>
		</div>
	)
}