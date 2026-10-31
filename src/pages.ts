
import { Node, table, tag } from "webutils";
import { html } from "itty-router";

import { routerHtml } from "./context";
import { X_OPTIONS } from "./index";

interface Details {
	title?: string;
	url?: string;
}

function Page(details: Details, ...children: Node[]): Response {
	const title = (details.title ? details.title + " | " : "") + "Seth Cooper";
	const url = X_OPTIONS.BASE_URL + details.url;

	return html("<!DOCTYPE html>" + tag("html", { "lang": "en" },
		tag("head", {},
			// page config
			tag("meta", { "charset": "utf-8" }),
			tag("meta", { "name": "viewport", "content": "width=device-width, initial-scale=1" }),
			tag("link", { "rel": "canonical", "href": url }),
			tag("link", {
				"rel": "icon",
				"type": "image/png",
				"sizes": "32x32",
				"href": X_OPTIONS.PHOTO_FAVICON,
			}),
			tag("link", {
				"rel": "apple-touch-icon",
				"sizes": "180x180",
				"href": X_OPTIONS.PHOTO_FAVICON_APPLE,
			}),
			// social sharing
			tag("title", {}, title),
			tag("meta", { "name": "description", "content": X_OPTIONS.DESCRIPTION }),
			tag("meta", { "property": "og:title", "content": title }),
			tag("meta", { "property": "og:description", "content": X_OPTIONS.DESCRIPTION }),
			tag("meta", { "property": "og:url", "content": url }),
			tag("meta", { "property": "og:type", "content": "website" }),
			// stylesheets
			tag("link", { "rel": "stylesheet", "href": "/css/normalize.css" }),
			tag("link", { "rel": "stylesheet", "href": "/css/skeleton.css" }),
			tag("link", { "rel": "stylesheet", "href": "/css/style.css" }),
		),
		tag("body", {},
			tag("div", { "id": "entry" },
				tag("h1", {}, "Seth Cooper"),
				tag("div", { "class": "row" },
					tag("div", { "id": "links", "class": "two-thirds offset-by-two column" },
						tag("a", { "href": "/" }, "Home"),
						tag("a", { "href": "/resume" }, "Resume"),
						tag("a", { "href": "/projects" }, "Projects"),
					),
				),
				tag("hr", {}),
				...children,
				tag("hr", {}),
				tag("div", { "id": "footer" },
					tag("script", {},
						`// Script for changing theme modes
(function() {
  const scriptE = document.currentScript;
  const htmlE = document.documentElement;
  const modeChangeE = document.createElement("a");
  // Function to set theme
  function setTheme(theme) {
    if (theme === "light") {
      window.localStorage.setItem("theme", "light");
      htmlE.dataset.theme = "light";
      modeChangeE.textContent = "Change to Dark Mode";
    } else {
      window.localStorage.setItem("theme", "dark");
      htmlE.dataset.theme = "dark";
      modeChangeE.textContent = "Change to Light Mode";
    }
  }
  // Set to localstorage type
  setTheme(window.localStorage.getItem("theme"));
  // Change mode element
  modeChangeE.style.cursor = "pointer";
  modeChangeE.style.textDecoration = "underline";
  modeChangeE.addEventListener("click", () => {
  	if (htmlE.dataset.theme === "light") {
  		setTheme("dark");
    } else {
  		setTheme("light");
    }
  });
  scriptE.after(modeChangeE);
})()`),
					tag("p", {}, "Site built by Seth Cooper"),
				),
			),
		),
	));
}

routerHtml.get("/", (req, env, ctx) => {
	return Page({});
});

routerHtml.get("/resume", (req, env, ctx) => {
	return Page({
		title: "Resume",
		url: "resume",
	},
		tag("div", { "class": "row" },
			tag("div", { "class": "five offset-by-one columns u-text-left" },
				tag("h2", {}, "Seth Cooper"),
				tag("h4", {}, "Pursuing Cybersecurity"),
			),
			tag("div", { "class": "five offset-by-one columns u-text-right" },
				tag("p", {}, tag("a", { "href": "mailto:sethicus@proton.me" }, "sethicus@proton.me")),
				tag("p", {}, "(785) - 643 - 5964"),
				tag("p", {}, "Graduate of Ell-Saline HS 2024"),
				tag("p", {}, "Pursuing Cybersecurity B.S. at K-State"),
			),
		),
		tag("div", { "class": "row" },
			tag("hr", { "class": "one-half offset-by-three column" }),
		),
		tag("div", { "id": "resume", "class": "row" },
			tag("div", { "class": "one-half column" },
				tag("h5", {}, "Professional Goals"),
				tag("p", {}, "Currently taking classes at K-State College of Engineering. Pursuing a career in Cybersecurity."),
				//
				tag("h5", {}, "Education"),
				tag("p", {}, "Bachelor of Science in Cybersecurity"),
				tag("p", {}, "Kansas State University"),
				tag("p", {}, "Expected May 2028"),
				//
				tag("h5", {}, "School/Community Activities"),
				tag("ul", {},
					tag("li", {}, "Football Player - Sr. Year"),
					tag("li", {}, "Scholar's Bowl - Jr. Year"),
					tag("li", {}, "FFA - Fr. & So. Year"),
					tag("li", {}, "Christian Challenge - So. Year"),
					tag("li", {}, "Member of Crosspoint Church"),
				),
				//
				tag("h5", {}, "Work Experience"),
				tag("p", {},
					tag("b", {}, "Commercial Signs"),
					tag("br", {}),
					"833 E. Crawford St.",
				),
				tag("ul", {},
					tag("li", {}, "Designed, built, and implemented a website using " +
						"Cloudflare Workers, Sqlite Database, S3 Bucket, " +
						"Itty-router, and Drizzle-Orm"),
					tag("li", {}, "Apparel Screen Printer"),
				),
				tag("p", {},
					tag("b", {}, "Coop's Pizzeria"),
					tag("br", {}),
					"1219A W. Crawford St."
				),
				tag("ul", {},
					tag("li", {}, "Designed, built, and implemented a website using " +
						"Cloudflare Workers, Sqlite Database, S3 Bucket, " +
						"Itty-router, and Drizzle-Orm"),
				),
			),
			tag("div", { "class": "one-half column" },
				tag("h5", {}, "Technical Skills"),
				tag("p", {}, tag("b", {}, "Applications")),
				tag("ul", {},
					tag("li", {}, "Built and currently maintain four websites for " +
						"Commercial Signs, Coop's Pizzeria, Jarah Byron Photography, and personally."),
					tag("li", {}, "Built a survival game in Unreal Engine with a perlin noise " +
						"generated world, inventory system, and vital system."),
					tag("li", {}, "Built a parkour game in Unity with moving obstacles and music " +
						"where the goal is to collect coins."),
					tag("li", {}, "Built a March Madness bracket evaluation script written in Python. " +
						"It uses the live bracket to determine user's bracket scores."),
				),
				tag("p", {}, tag("b", {}, "Tools")),
				tag("p", {}, "Zed IDE, Git, MS Visual Studio Code, Cloudflare Workers, and Sqlite."),
				tag("p", {}, tag("b", {}, "Programming Languages")),
				tag("p", {}, "Rust, C, Typescript, Python, C#, Java, HTML, and CSS"),
				tag("p", {}, tag("b", {}, "Office Skills")),
				tag("p", {}, "Flexibility, Problem Solving"),
				tag("p", {}, tag("b", {}, "Interests")),
				tag("p", {}, "Cybersecurity, Distributed Server Management"),
				tag("h5", {}, "References"),
				tag("p", {}, tag("b", {}, "Steve Gowin, "), "Pastor Emeritus at Emmanuel Four Square"),
				tag("p", {}, "Phone: (785) - 819 - 0917"),
				tag("p", {}, tag("b", {}, "Roger Pavko, "), "Salesman at American Family Insurance"),
				tag("p", {}, "Phone: (785) - 342 - 9803"),
			),
		),
	);
});

routerHtml.get("/projects", (req, env, ctx) => {
	const GITHUB_BASE = "https://github.com/Viserest/";
	return Page({
		title: "Projects",
		url: "projects",
	},
		tag("h2", {}, "Projects"),
		tag("div", { "class": "row" },
			table([
				tag("th", {}, "Name"),
				tag("th", {}, "Language"),
				tag("th", {}, "Libraries"),
				tag("th", {}, "View Repo"),
				tag("th", {}, "View Project"),
			], [
				// websites
				["Websites"],
				["Website Utilities", "Typescript", "", GITHUB_BASE + "webutils", ""],
				["Personal", "Typescript", "[1]", GITHUB_BASE + "web-sethicus", "https://sethicus.com"],
				["Commercial Signs", "Typescript", "[1]", GITHUB_BASE + "web-csigns", "https://commercialsigns.biz/"],
				["Coops Pizzeria", "Typescript", "[1]", GITHUB_BASE + "web-coops", "https://coopspizzeria.com/"],
				["JCB Photography", "Typescript", "[1]", GITHUB_BASE + "web-jaha", "https://jcbphotograph.com/"],
				["Loren Holtberg", "Typescript", "[1]", GITHUB_BASE + "web-loren", ""],
				["Consortiis", "Typescript", "[1]", GITHUB_BASE + "web-consortiis", ""],
				// random
				["Random"],
				["Libweb", "C", "", GITHUB_BASE + "libweb", ""],
				["Tunic", "Rust", "", GITHUB_BASE + "tunic", ""],
				["Brewster", "Rust", "", GITHUB_BASE + "brewster", ""],
				["p2p-msg", "Rust", "", GITHUB_BASE + "p2p-msg", ""],
				["PeerMessage", "C#", "", GITHUB_BASE + "PeerMessage", ""],
				["CmdArgs", "C#", "", GITHUB_BASE + "CmdArgs", ""],
				// games
				["Games"],
				["Tic Tac Toe", "Javascript", "", "", ""],
				["TORMENTOR", "Javascript", "P5.js", "https://editor.p5js.org/sethicus/sketches/wlT1vQglv", ""],
				["Lost and Alone", "C++", "Unreal Engine", GITHUB_BASE + "Lost-and-Alone", ""],
				["Effects", "C#", "Unity Engine", GITHUB_BASE + "Effects", ""],
			], (v) => {
				if (v.length === 1) {
					return tag("tr", { "class": "u-full-width u-center" },
						tag("td", {}, tag("h5", {}, v[0])),
						tag("td", {}),
						tag("td", {}),
						tag("td", {}),
						tag("td", {}),
					);
				}
				return tag("tr", {},
					tag("td", {}, v[0]),
					tag("td", {}, v[1]),
					tag("td", {}, v[2]),
					tag("td", {}, v[3] !== "" ? tag("a", { "href": v[3] }, "View") : ""),
					tag("td", {}, v[4] !== "" ? tag("a", { "href": v[4] }, "View") : ""),
				);
			}).attributeAppend({ "class": "ten offset-by-one columns" }),
		),
		tag("p", {}, "[1]: Itty-router, Drizzle-orm, Website Utilities"),
	);
});
