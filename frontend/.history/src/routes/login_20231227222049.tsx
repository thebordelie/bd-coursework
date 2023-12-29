import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import RegisterForm, { RegisterDetails } from "~/components/forms/register";

const Login: React.FC = () => {
	return (
		<main>
			<RegisterForm />
		</main>
	)
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
		console.log(inputValue);
	});
	if (needsReturn) {
		return json({ errors });
	}
	return redirect("/");
}

export default Login;