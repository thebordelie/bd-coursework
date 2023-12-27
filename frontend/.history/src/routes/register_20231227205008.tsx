import { ActionFunctionArgs, redirect } from "@remix-run/node";
import RegisterForm from "~/components/forms/register";

const Register: React.FC = () => {
	return (
		<main>
			<RegisterForm />
		</main>
	)
}

export async function action({ request }: ActionFunctionArgs) {
	const body = await request.formData();
	console.log(body.get("login"));
	return redirect("/");
}

export default Register;