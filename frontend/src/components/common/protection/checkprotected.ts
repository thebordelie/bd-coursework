import { getSession } from "~/sessions";

export const protectedRoute = async (request: Request) => {
	const session = await getSession(
		request.headers.get("Cookie")
	);
	return !session.has("userid");
}