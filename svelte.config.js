import path from "path"
import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // https://github.com/sveltejs/svelte-preprocess
  preprocess: preprocess(),
  // kit options
  kit: {
    // id of render target (an el in ./src/app.html)
    target: "#site",
    // static rendering
    adapter: adapter({
      pages: "docs",
      assets: "docs"
    }),
    // // make more static
    // router: false,
  }
}

export default config
