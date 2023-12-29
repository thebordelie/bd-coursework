import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import { LinksFunction } from "@remix-run/node";
import styles from "./global.css";

export const APILINK = "http://25.74.13.166:8080/";
export const enum APIEndpoints {
	register = "auth/register",
	login = "auth/login",
	organize = "organizer/event",
	all_events = "member_management/all_events",
	viewerPosts = "member_management/user_event",
	viewEvent = "member_management/new_event",
	unsubscribeEvent = "member_management/delete_event",
	becomeMember = "member_management/new_member_event",
	addMemberToVer = "member_management/new_member",
	participatedEvents = "member_management/member_event",
	deleteMember = "member_management/delete_member_event"
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
