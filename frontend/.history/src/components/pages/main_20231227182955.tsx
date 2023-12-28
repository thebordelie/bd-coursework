import { LinksFunction } from "@remix-run/node";
import styles from "./main.css";
import musicbg from "./music.webp";
import { useEffect, useRef, useState } from "react";

const MainPage: React.FC = () => {
	const [scrollY, setScrollY] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const parallaxStyle = {
		transform: `translateY(${scrollY * 0.5}px)`,
	};

	return (
		<div
			ref={containerRef}
			className="flex flex-col items-center justify-center h-screen relative bg-cover bg-center"
			style={{
				backgroundImage: `url(${musicbg})`,
			}}
		>
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* Parallax effect */}
			<div className="absolute inset-0 flex flex-col items-center justify-center" style={parallaxStyle}>
				<h1 className="text-4xl font-bold text-white mb-8 z-10">Музыкальные Конкурсы</h1>
				<div className="flex space-x-4 z-10">
					<button className="bg-blue-500 text-white px-4 py-2 rounded">Button 1</button>
					<button className="bg-green-500 text-white px-4 py-2 rounded">Button 2</button>
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