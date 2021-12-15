// import posts
const raw = import.meta.globEager("./posts/*.svelte")

// -- constants --
// a pattern for the name
const kNamePattern = /<title>(.*)<\/title>/

// a pattern for metadata
const kMetaPattern = /<meta name="([^>]*)" content="([^"]*)"[^>]*>/g

// -- query --
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
  const posts = []

  // for each file in posts
  for (const path in raw) {
    // parse int date components from path:
    //   ./posts/yy-mm-dd-hh-MM-name.svelte -> [yy, mm, dd, hh, MM]
    const cmps = path
      .slice(8)
      .split("-").slice(0, 5)
      .map((c) => Number.parseInt(c))

    // year is 4 digits
    cmps[0] += 2000

    // month is 0-indexed
    cmps[1] -= 1

    // @ts-ignore create date from components
    const date = new Date(...cmps)

    // render post
    const post = raw[path].default.render()

    // extract map of metadata
    const meta = {}
    for (const match of Array.from(post.head.matchAll(kMetaPattern))) {
      meta[match[1]] = match[2]
    }

    // create post entry
    posts.push({
      name: post.head.match(kNamePattern)[1],
      date,
      meta,
      body: post.html.trim(),
    })
  }

  // show in reverse-chronological order
  posts.reverse()

  // return posts as response
  return {
    // @ts-ignore
    body: posts
  }
}