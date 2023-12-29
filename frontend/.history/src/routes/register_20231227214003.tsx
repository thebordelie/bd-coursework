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
	const errors: any = {};
	Object.keys(RegisterDetails).forEach((key) => {
		const value = RegisterDetails[key as keyof typeof RegisterDetails];
		if (value === null) {
			errors[key] = "Заполните это поле"
		}
		console.log(body.get(value));
	});
	return redirect("/");
}

export default Register;