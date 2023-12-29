import { LoaderFunction, redirect } from "@remix-run/node";
import { APIEndpoints, APILINK } from "~/root";
import { getSession } from "~/sessions";

export const loader: LoaderFunction = async ({ request, params }) => {
	const event_id = params.postId;
	const session = getSession(await request.headers.get("Cookie"));
	await fetch(APILINK + APIEndpoints.unsubscribeEvent, {
		method: "post",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			id: event_id,
			id1: (await session).get("userid")
		})
	});
	return redirect("/profile")
}