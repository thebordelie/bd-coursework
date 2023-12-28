const NotificationFeed = () => {
	return (
		<div className="bg-white mt-5 shadow p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
			<div className="col-span-2">
				<div className="bg-gray-100 p-4 rounded-md">
					<h3 className="text-lg font-semibold mb-2">Notification 1</h3>
					<p className="text-gray-600">Type: Update</p>
					<p className="text-gray-600">Status: Unread</p>
					<p className="text-gray-600">Description: Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
  
			<div className="col-span-2">
				<div className="bg-gray-100 p-4 rounded-md">
					<h3 className="text-lg font-semibold mb-2">Notification 2</h3>
					<p className="text-gray-600">Type: Alert</p>
					<p className="text-gray-600">Status: Read</p>
					<p className="text-gray-600">Description: Consectetur adipiscing elit.</p>
				</div>
			</div>
  
			<div className="col-span-1">
				<div className="bg-gray-100 p-4 rounded-md">
					<h3 className="text-lg font-semibold mb-2">Notification 3</h3>
					<p className="text-gray-600">Type: Reminder</p>
					<p className="text-gray-600">Status: Unread</p>
					<p className="text-gray-600">Description: Sed do eiusmod tempor incididunt.</p>
				</div>
			</div>
		</div>
	);
};
  
export default NotificationFeed;