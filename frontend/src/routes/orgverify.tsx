import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import NavbarInner from "~/components/common/navigation/logginedNav";
import { APIEndpoints, APILINK } from "~/root";

export interface UsersI {
    posts: {
        fullName: string,
        type: string,
		id: string
    }[]
}

const PostFeed: React.FC = () => {
	const { posts } = useLoaderData<UsersI>();
	const submit = useSubmit();
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main className="container mx-auto p-4">
				<div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-8">
					{posts.length === 0 ? "No users to verify" : posts.map((post, index) => (
						<div
							key={index}
							className="bg-white mb-4 p-4 rounded-md shadow-md flex flex-col space-y-2"
						>
							<p className="text-lg font-semibold">{post.fullName}</p>
							<p className="text-gray-600">{post.type}</p>
							<div className="flex space-x-2">
								<button 
									onClick={() => {
										submit({ id: post.id }, { method: "post" });
									}}
									type="submit"
									name="_action"
									value="accept"
									className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                Принять
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};

export const action: ActionFunction = async ({ request }) => {
	const data = await request.formData();
	await fetch(APILINK + APIEndpoints.verifyUser, {
		method: "post",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			id: data.get("id")
		})
	});
	return null;
}

export const loader: LoaderFunction = async () => {
	const result = await fetch(APILINK + APIEndpoints.getNonVerd, {
		method: "get",
		headers: {
			"Content-type": "application/json"
		}
	});
	return {
		posts: await result.json()
	}
}
  
export default PostFeed;