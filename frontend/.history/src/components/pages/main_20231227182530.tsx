import { LinksFunction } from "@remix-run/node";
import styles from "./main.css";
import musicbg from "./music.webp";

const MainPage: React.FC = () => {
	return (
		<div
			className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${musicbg})` }}
		>
			<div
				className="absolute inset-0 bg-black opacity-60"
				style={{ zIndex: 0 }}
			></div>
			<div style={{ zIndex: 1 }}>
				<h1 className="text-4xl font-bold text-white mb-8">Музыкальные Конкурсы</h1>
				<div className="flex space-x-4">
					<button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
					<button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
				</div>
			</div>
		</div>
	);
};

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: styles }
	]
}
  
export default MainPage;