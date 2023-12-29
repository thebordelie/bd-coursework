import Navbar from "~/components/common/navigation/unlogginedNav";
import AuthorsInfo from "~/components/pages/face/about";
import MainPage from "~/components/pages/face/main";

export default function Index() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<MainPage />
				<AuthorsInfo />
			</main>
		</div>
	);
}
