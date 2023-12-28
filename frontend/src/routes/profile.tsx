import { LoaderFunction, json } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import NavbarInner from "~/components/common/navigation/logginedNav";
import { protectedRoute } from "~/components/common/protection/checkprotected";
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
	if (await protectedRoute(request)) {
		throw new Error("you are logged out");
	}
	const session = await getSession(
		request.headers.get("Cookie")
	);
	return json({
		fullname: session.get("fullname"),
		gender: session.get("gender"),
		city: session.get("city"),
		role: session.get("role")
	});
}

export const ErrorBoundary = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/")
		}, 2000);
	});
	return <h1>Вы разлогинились</h1>;
}

export default Profile;