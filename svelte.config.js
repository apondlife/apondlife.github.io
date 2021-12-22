import path from "path"
import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

// find build dir
const dir = process.env.BUILD_DIR || "docs"

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
      pages: dir,
      assets: dir,
    }),
    // make more static
    router: false,
  }
}

export default config
