import { createCookie, createCookieSessionStorage } from "@remix-run/node";

const sesisonCookie = createCookie("__session", {
	expires: new Date(Date.now() + 20 * 60 * 1000)
});

export const { getSession, commitSession, destroySession } = createCookieSessionStorage({
	cookie: sesisonCookie
});