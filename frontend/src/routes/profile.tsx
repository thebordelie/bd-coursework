import { LoaderFunction, json, redirect } from "@remix-run/node";
import NavbarInner from "~/components/common/navigation/logginedNav";
import { protectedRoute } from "~/components/common/protection/checkprotected";
import NotificationFeed from "~/components/pages/notificationfeed/notificationfeed";
import ProfileCard from "~/components/pages/profile/profilecard";
import { APIEndpoints, APILINK } from "~/root";
import { getSession } from "~/sessions";

const Profile: React.FC = () => {

	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main className="container mx-auto p-4">
				<ProfileCard/>
				<NotificationFeed />
			</main>
		</div>
	)
}


export const loader: LoaderFunction = async ({ request }) => {
	if (await protectedRoute(request)) {
		return redirect("/login");
	}
	const session = await getSession(
		request.headers.get("Cookie")
	);
	let posts = []
	let viewerPosts = []
	try {
		const response = await fetch(APILINK + APIEndpoints.all_events, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				cityName: await session.get("city")
			})
		});
		posts = await response.json();

		const viewerPostsResponse = await fetch(APILINK + APIEndpoints.viewerPosts, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: await session.get("userid")
			})
		});
		viewerPosts = await viewerPostsResponse.json();
	}
	catch (error) {
		//poh
	}
	return json({
		fullname: session.get("fullname"),
		gender: session.get("gender"),
		city: session.get("city"),
		role: session.get("role"),
		posts,
		viewerPosts
	});
}


export default Profile;