import { ActionFunctionArgs, redirect } from "@remix-run/node";
import RegisterForm, { RegisterDetails } from "~/components/forms/register";

const Register: React.FC = () => {
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
		const value = RegisterDetails[key as keyof typeof RegisterDetails];
		if (value === "") {
			errors[key as keyof typeof RegisterDetails] = "Заполните это поле";
			needsReturn = true;
		}
		console.log(body.get(value));
	});
	if (needsReturn) {
		return Error("Not all fields are input");
	}
	return redirect("/");
}

export default Register;