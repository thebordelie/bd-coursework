import { LoaderFunction } from "@remix-run/server-runtime"

export const Register: React.FC = () => {
	return (
		<>register page</>
	)
}

export const loader: LoaderFunction = () => {
	return true;
}