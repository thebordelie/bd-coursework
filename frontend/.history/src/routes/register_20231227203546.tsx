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
	console.log(await request.formData());
	return redirect("/");
}

export default Register;