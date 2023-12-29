import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Центр музыки и музыкальных конкурсов" }
	];
};

export default function Index() {
	return (
		<>ehllo world</>
	);
}
