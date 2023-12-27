import RegisterForm, { action as RegisterAction } from "~/components/forms/register";

const Register: React.FC = () => {
	return (
		<main>
			<RegisterForm />
		</main>
	)
}

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
	console.log(await request.formData());
	return redirect("/home");
}

export default Register;