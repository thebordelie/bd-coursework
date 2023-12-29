import { LinksFunction } from "@remix-run/node";
import styles from "./main.css";

const MainPage: React.FC = () => {
	return (
		<div
			className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image.jpeg)` }}
		>
			<h1 className="text-4xl font-bold text-white mb-8">Музыкальные Конкурсы</h1>
			<div className="flex space-x-4">
				<button className="bg-blue-500 text-white px-4 py-2 rounded">Button 1</button>
				<button className="bg-green-500 text-white px-4 py-2 rounded">Button 2</button>
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