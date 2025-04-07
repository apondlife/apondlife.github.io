import {
  ResourceUrlPlugin,
  SassPlugin,
  StringPlugin,
} from "./cfg/index.mjs"

// -- config --
export default function (config) {
  // -- constants --
  const srcDir = "./src"
  const dstDir = "./dst"

  // -- assets --
  config.addPassthroughCopy(`${srcDir}/img`)
  config.addPassthroughCopy(`${srcDir}/font`)
  config.addPassthroughCopy(`${srcDir}/**/*.js`)

  // -- modules --
  config.addPlugin(ResourceUrlPlugin)
  config.addPlugin(SassPlugin)
  config.addPlugin(StringPlugin)

  // -- output --
  return {
    dir: {
      input: srcDir,
      output: dstDir,
      layouts: "_layouts",
    },
  }
}
