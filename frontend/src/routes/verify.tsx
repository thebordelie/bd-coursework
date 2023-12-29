import { ActionFunctionArgs, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import NavbarInner from "~/components/common/navigation/logginedNav";
import { protectedRoute } from "~/components/common/protection/checkprotected";
import { APIEndpoints, APILINK } from "~/root";
import { getSession } from "~/sessions";


const Organize = () => {

	const navigation = useNavigation();
  
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main>
				<Form method="post" className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-8">
					<div>
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
            Выберите инструмент
						</label>
						<select
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="eventName"
							name="instrumentType"
						>
							<option value="Скрипка">Скрипка</option>
							<option value="Пение">Пение</option>
							<option value="Пианино">Пианино</option>
						</select>
					</div>
					<div className="mt-4 flex items-center justify-between">
						<button
							disabled={ navigation.state === "submitting" }
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
            Отправить
						</button>
					</div>
				</Form>
			</main>
		</div>
	);
};

export const loader: LoaderFunction = async ({ request }) => {
	if (await protectedRoute(request)) {
		return redirect("/login");
	}
	return null;
}

export async function action({ request }: ActionFunctionArgs) {
	const data = await request.formData();
	const session = await getSession(
		request.headers.get("Cookie")
	);
	try {
		await fetch(APILINK + APIEndpoints.addMemberToVer, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: await session.get("userid"),
				competitionType: data.get("instrumentType")
			})
		});
	}
	catch (error) {
		// poh
	}
	return redirect("/profile");
}

export default Organize;