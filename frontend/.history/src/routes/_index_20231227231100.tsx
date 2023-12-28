import { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/common/navigation/loggined";
import AuthorsInfo from "~/components/pages/about";
import MainPage from "~/components/pages/main";

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
