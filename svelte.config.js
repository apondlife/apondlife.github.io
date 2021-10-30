import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // https://github.com/sveltejs/svelte-preprocess
  preprocess: preprocess(),
  // kit options
  kit: {
    // set id of render target (el in app.html)
    target: "#site",
    // static rendering options
    adapter: adapter({
      pages: "docs",
      assets: "docs"
    })
  }
}

export default config
