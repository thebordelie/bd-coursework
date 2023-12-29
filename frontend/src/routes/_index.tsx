import { LoaderFunction, redirect } from "@remix-run/node";
import Navbar from "~/components/common/navigation/unlogginedNav";
import { protectedRoute } from "~/components/common/protection/checkprotected";
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

export const loader: LoaderFunction = async ({ request }) => {
	if (!await protectedRoute(request)) {
		return redirect("/profile");
	}
	return null
}