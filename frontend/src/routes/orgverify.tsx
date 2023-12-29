import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export interface UsersI {
    posts: {
        fullname: string,
        type: string
    }[]
}

const PostFeed: React.FC = () => {
	const { posts } = useLoaderData<UsersI>();
	console.log(posts)
	return (
		<div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-8">
			{posts.length === 0 ? "No users to verify" : posts.map((post, index) => (
				<div
					key={index}
					className="bg-white mb-4 p-4 rounded-md shadow-md flex flex-col space-y-2"
				>
					<p className="text-lg font-semibold">{post.fullname}</p>
					<p className="text-gray-600">{post.type}</p>
					<div className="flex space-x-2">
						<button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                Принять
						</button>
						<button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red">
                Отклонить
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export const loader: LoaderFunction = () => {
	return {
		posts: [ {
			fullname: "nigger",
			type: "fag"
		},
		{
			fullname: "nigger",
			type: "fag"
		},
		]
	}
}
  
export default PostFeed;