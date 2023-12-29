import NotificationCard from "./card";

const NotificationFeed = () => {
	return (
		<div className="bg-white mt-5 shadow p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
		</div>
	);
};
  
export default NotificationFeed;