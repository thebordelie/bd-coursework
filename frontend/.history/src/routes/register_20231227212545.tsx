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
	console.log(Object.values(RegisterDetails), data);
	return redirect("/");
}

export default Register;