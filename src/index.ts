
import { errorPage } from "webutils";

import { routerHtml } from "./context";
import "./pages";

export const X_OPTIONS = {
	// urls
	BASE_URL: "https://sethicus.com/",
	BASE_WWW_URL: "https://www.sethicus.com/",
	// information
	DESCRIPTION: "Seth Cooper",
	PHOTO_FAVICON: "./images/favicon.png",
	PHOTO_FAVICON_APPLE: "./images/favicon-apple.png",
};

export default {
	async fetch(req, env, ctx) {
		try {
			return await (routerHtml).fetch(req, env, ctx);
		} catch (err) {
			console.error(err);
			try {
				return errorPage(500, req);
			} catch (err2) {
				console.error(err2);
				return new Response("Internal server error", { status: 500 });
			}
		}
	},
} satisfies ExportedHandler<Env>;
