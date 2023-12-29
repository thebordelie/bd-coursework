/* eslint-disable react-hooks/exhaustive-deps */
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { APIEndpoints, APILINK } from "~/root";
import { getSession } from "~/sessions";

export const loader: LoaderFunction = async ({ request, params }) => {
	const event_id = params.postId;
	const session = getSession(await request.headers.get("Cookie"));
	const response = await fetch(APILINK + APIEndpoints.becomeMember, {
		method: "post",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			id: event_id,
			id1: (await session).get("userid")
		})
	});
	return json({
		status: response.status,
		errorIn: event_id
	})
}

const ParticipateResponseComponent: React.FC = () => {
	const loaderData = useLoaderData<typeof loader>();
	const navigate = useNavigate();
	const [status, setStatus] = useState<string>();
	useEffect(() => {
		if (loaderData.status < 400) {
			navigate("/profile")
		}
		else {
			setStatus("You are not verificated for this competitoin");
		}
	}, []);
	return (<><h1>{ status }</h1><button onClick={() => { navigate("/profile") }}>Home</button></>)
}

export default ParticipateResponseComponent;