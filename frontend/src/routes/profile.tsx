import { LoaderFunction, json } from "@remix-run/node";
import NavbarInner from "~/components/common/navigation/logginedNav"
import NotificationFeed from "~/components/pages/notificationfeed/notificationfeed";
import ProfileCard from "~/components/pages/profile/profilecard";

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

export const loader: LoaderFunction = () => {
	return json({
		fullname: "nigger",
		gender: "nigenige",
		city: "asdfasdf",
		role: "fuck"
	})
}

export default Profile;