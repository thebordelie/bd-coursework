import { MetaFunction } from "@remix-run/node";
import AuthorsInfo from "~/components/pages/about";
import MainPage from "~/components/pages/main";

export const meta: MetaFunction = () => {
	return [
		{ title: "Центр музыки и музыкальных конкурсов" }
	];
};

export default function Index() {
	return (
		<main>
			<MainPage />
			<AuthorsInfo />
		</main>
	);
}
