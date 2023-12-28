import NavbarInner from "~/components/common/navigation/logginedNav"

const Profile: React.FC = () => {
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main>
				<Profile />
			</main>
		</div>
	)
}

export default Profile;