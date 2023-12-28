import { LoaderFunction } from "@remix-run/node";
import NavbarInner from "~/components/common/navigation/logginedNav"
import UserProfile from "~/components/pages/profile/profile";

const Profile: React.FC = () => {
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main>
				<UserProfile />
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