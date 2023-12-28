import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import styles from "./global.css";
import { LinksFunction } from "@remix-run/node";

export const APILINK = "http://25.74.13.166:8080/";
export const enum APIEndpoints {
	register = "auth/register",
	login = "auth/login"
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Центр музыки и музыкальных конкурсов</title>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: styles }
	];
}
