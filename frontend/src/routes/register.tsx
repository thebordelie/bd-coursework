import { ActionFunctionArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import Navbar from "~/components/common/navigation/unlogginedNav";
import { protectedRoute } from "~/components/common/protection/checkprotected";
import RegisterForm, { RegisterDetails } from "~/components/forms/register";
import { APIEndpoints, APILINK } from "~/root";

const Register: React.FC = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<RegisterForm />
			</main>
		</div>
	)
}

export const loader: LoaderFunction = async ({ request }) => {
	if (!await protectedRoute(request)) {
		return redirect("/profile");
	}
	return null
}

export async function action({ request }: ActionFunctionArgs) {
	const body = await request.formData();
	const errors: typeof RegisterDetails = {
		city: "",
		fatherName: "",
		gender: "",
		login: "",
		name: "",
		password: "",
		surname: ""
	};
	let needsReturn = false;
	Object.keys(RegisterDetails).forEach((key) => {
		const objValue = RegisterDetails[key as keyof typeof RegisterDetails];
		const inputValue = body.get(objValue);
		if (inputValue === "") {
			errors[key as keyof typeof RegisterDetails] = "Заполните это поле";
			needsReturn = true;
		}
	});
	if (needsReturn) {
		return json({ errors });
	}
	const fullname = `${body.get("surname")} ${body.get("name")} ${body.get("father_name")}`;
	try {
		const result = await fetch(APILINK + APIEndpoints.register, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				city: body.get("city"),
				gender: body.get("gender"),
				login: body.get("login"),
				fullName: fullname,
				password: body.get("password"),
			})
		});
		if (!result.ok) {
			errors.login = "Пошел на хуй)))...";
			return json({ errors });
		}
	}
	catch (error) {
		// poh
	}
	return redirect("/profile");
}

export default Register;