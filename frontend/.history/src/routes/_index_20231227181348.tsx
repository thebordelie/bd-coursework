import { MetaFunction } from "@remix-run/react/dist/routeModules";
import MainPage from "~/components/pages/main";

export const meta: MetaFunction = () => {
	return [
		{ title: "Центр музыки и музыкальных конкурсов" }
	];
};

export default function Index() {
	return (
		<MainPage />
	);
}
