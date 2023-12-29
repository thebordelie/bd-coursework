import { MetaFunction } from "@remix-run/node";
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
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
			<p>asdfasdfs</p>
		</main>
	);
}
