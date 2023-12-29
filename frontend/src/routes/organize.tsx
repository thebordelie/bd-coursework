import { ActionFunctionArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import NavbarInner from "~/components/common/navigation/logginedNav";
import { protectedRoute } from "~/components/common/protection/checkprotected";
import EventForm, { OrganizeDetails } from "~/components/forms/organize";
import { APIEndpoints, APILINK } from "~/root";
import { getSession } from "~/sessions";


const Organize = () => {
  
	return (
		<div>
			<header>
				<NavbarInner />
			</header>
			<main>
				<EventForm />
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
	const body = await request.formData();
	const errors: typeof OrganizeDetails = {
		type: "",
		cityName: "",
		date: "",
		house: "",
		name: "",
		street: ""
	};
	let needsReturn = false;
	Object.keys(OrganizeDetails).forEach((key) => {
		const objValue = OrganizeDetails[key as keyof typeof OrganizeDetails];
		const inputValue = body.get(objValue);
		if (!inputValue) {
			errors[key as keyof typeof OrganizeDetails] = "Заполните это поле";
			needsReturn = true;
		}
	});
	if (needsReturn) {
		return json({ errors });
	}
	const session = await getSession(
		request.headers.get("Cookie")
	);
	try {
		const result = await fetch(APILINK + APIEndpoints.organize, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				type: body.get("type"),
				city: body.get("cityName"),
				date: body.get("date"),
				house: body.get("house"),
				name: body.get("name"),
				street: body.get("street"),
				userid: await session.get("userid")
			})
		});
		if (!result.ok) {
			errors.name = "Не удалось отправить";
			return json({ errors });
		}
	}
	catch (error) {
		console.log(error)
		return json({ errors });
	}
	return redirect("/profile");
}

export default Organize;