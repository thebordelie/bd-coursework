import { ActionFunctionArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import Navbar from "~/components/common/navigation/unlogginedNav";
import { protectedRoute } from "~/components/common/protection/checkprotected";
import LoginForm, { LoginDetails } from "~/components/forms/login";
import { APIEndpoints, APILINK } from "~/root";
import { commitSession, getSession } from "~/sessions";

const Login: React.FC = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<LoginForm />
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

	const errors: typeof LoginDetails = {
		login: "",
		password: ""
	}
	
	let needsReturn = false;
	Object.keys(LoginDetails).forEach((key) => {
		const objValue = LoginDetails[key as keyof typeof LoginDetails];
		const inputValue = body.get(objValue);
		if (inputValue === "") {
			errors[key as keyof typeof LoginDetails] = "Заполните это поле";
			needsReturn = true;
		}
	});
	if (needsReturn) {
		return json({ errors });
	}
	let data = null;
	try {
		const result = await fetch(APILINK + APIEndpoints.login, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				login: body.get("login"),
				password: body.get("password"),
			})
		});
		if (!result.ok) {
			errors.password = "Пошел на хуй)))...";
			return json({ errors });
		}
		data = await result.json();
	}
	catch (error) {
		return json({ errors });
	}
	const session = await getSession(request.headers.get("Cookie"));
	session.set("userid", data.id);
	session.set("fullname", data.fullName);
	session.set("city", data.city);
	session.set("role", data.role);
	session.set("gender", data.gender);
	return redirect("/profile", {
		headers: {
			"Set-Cookie": await commitSession(session)
		}
	});
}

export default Login;