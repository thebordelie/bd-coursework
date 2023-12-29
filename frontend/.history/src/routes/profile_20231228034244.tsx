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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="col-span-2">
						<UserProfile />
					</div>
					<div className="col-span-1">
						<LogoutButton />
						
					</div>
					<div className="col-span-3 md:col-span-2">
						<ButtonGroup />
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