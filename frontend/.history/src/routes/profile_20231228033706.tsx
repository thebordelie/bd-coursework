import { LoaderFunction, json } from "@remix-run/node";
import NavbarInner from "~/components/common/navigation/logginedNav"
import ButtonGroup from "~/components/pages/profile/functionality";
import UserProfile from "~/components/pages/profile/profile";

const Profile: React.FC = () => {
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main>
				<UserProfile />
				<ButtonGroup />
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