import { useLoaderData } from "@remix-run/react";
import NotificationCard from "./card";

export interface PostsI {
	id: string,
	type: string,
	cityName: string,
	date: string,
	name: string,
	isViewer: boolean,
	isParticipant: boolean
}

const NotificationFeed = () => {

	const { posts, viewerPosts, participatedEvents } = useLoaderData<{ posts: PostsI[], viewerPosts: string[], participatedEvents: string[] }>();

	return (
		<div className="bg-white mt-5 shadow p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
			{ posts.length > 0 ? posts.map((post, index) => {
				return <NotificationCard
					id={ post.id }
					cityName={post.cityName}
					date={post.date}
					name={post.name}
					type={post.type}
					key={post.name + index}
					isViewer={ viewerPosts.includes(post.id) }
					isParticipant={ participatedEvents.includes(post.id) } />
			}) : <h1>No events in your city</h1> }
		</div>
	);
};
  
export default NotificationFeed;