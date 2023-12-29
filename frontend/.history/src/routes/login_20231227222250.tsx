import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import LoginForm, { LoginDetails } from "~/components/forms/login";

const Login: React.FC = () => {
	return (
		<main>
			<LoginForm />
		</main>
	)
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
		console.log(inputValue);
	});
	if (needsReturn) {
		return json({ errors });
	}
	return redirect("/");
}

export default Login;