import RegisterForm, { action as RegisterAction } from "~/components/forms/register";

const Register: React.FC = () => {
	return (
		<main>
			<RegisterForm />
		</main>
	)
}

export const action = RegisterAction;

export default Register;