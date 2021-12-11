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
    // use app_ instead of _app to avoid jekyll problems on gh pages (https://giters.com/sveltejs/kit/issues/2143)
    appDir: "app_",
    // static rendering
    adapter: adapter({
      pages: "docs",
      assets: "docs"
    }),
    // make more static
    router: false,
    // build tool (https://github.com/vitejs/vite)
    vite: {
      resolve: {
        alias: {
          "@lib": path.resolve("./src/lib")
        }
      }
    }
  }
}

export default config
