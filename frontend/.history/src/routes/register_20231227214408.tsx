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
	Object.keys(RegisterDetails).forEach((key) => {
		const value = RegisterDetails[key as keyof typeof RegisterDetails];
		let needsReturn = false;
		if (value === "") {
			errors[key as keyof typeof RegisterDetails] = "Заполните это поле";
			needsReturn = true;
		}
		if (needsReturn) {
			throw Error("Not all fields are input");
		}
		console.log(body.get(value));
	});
	return redirect("/");
}

export default Register;