/* eslint-disable react-hooks/exhaustive-deps */
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NavbarInner from "~/components/common/navigation/logginedNav";
import { APIEndpoints, APILINK } from "~/root";

export interface Users {
    users: {
       fullName: string 
    }[]
}

export const loader: LoaderFunction = async ({ params }) => {
	const event_id = params.postId;
	const response = await fetch(APILINK + APIEndpoints.participators, {
		method: "post",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			id: event_id
		})
	});
	return json({
		users: await response.json()
	})
}

const Participators: React.FC = () => {
	const { users } = useLoaderData<Users>();
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main className="container mx-auto p-4">
				<div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-8">
					<h1>Участники</h1>
					{users.length === 0 ? "No members" : users.map((user, index) => (
						<div
							key={index}
							className="bg-white mb-4 p-4 rounded-md shadow-md flex flex-col space-y-2"
						>
							<p className="text-lg font-semibold">{user.fullName}</p>
						</div>
					))}
				</div>
			</main>
		</div>)
}

export default Participators;