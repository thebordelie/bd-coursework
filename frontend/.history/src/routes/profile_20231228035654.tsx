import { LoaderFunction, json } from "@remix-run/node";
import NavbarInner from "~/components/common/navigation/logginedNav"
import ButtonGroup from "~/components/pages/profile/functionality";
import LogoutButton from "~/components/pages/profile/logout";
import UserProfile from "~/components/pages/profile/profile";

const Profile: React.FC = () => {
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main className="container mx-auto p-4">
				<div className="bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					<div className="col-span-2">
						<UserProfile />
					</div>
					<div className="col-span-1">
						<ButtonGroup />
					</div>
					<div className="col-span-4 md:col-span-4">
						<LogoutButton />
					</div>
				</div>
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