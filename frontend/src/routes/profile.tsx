import { LoaderFunction, json } from "@remix-run/node";
import NavbarInner from "~/components/common/navigation/logginedNav"
import NotificationFeed from "~/components/pages/notificationfeed/notificationfeed";
import ProfileCard from "~/components/pages/profile/profilecard";
import { getSession } from "~/sessions";

const Profile: React.FC = () => {
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main className="container mx-auto p-4">
				<ProfileCard />
				<NotificationFeed />
			</main>
		</div>
	)
}

export const loader: LoaderFunction = async ({ request }) => {
	const session = await getSession(
		request.headers.get("Cookie")
	);
	return json({
		fullname: session.get("userId"),
		gender: "nigenige",
		city: "asdfasdf",
		role: "fuck"
	})
}

export default Profile;