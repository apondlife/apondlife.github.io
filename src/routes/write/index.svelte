<script context="module">
  // -- cfg --
  export const hydrate = false

  // -- data --
  export async function load({ fetch }) {
    const json = await fetch("/write.json").then((r) => r.json())

    return {
      props: {
        posts: json
      }
    }
  }
</script>

<script>
  import Header from "$lib/header.svelte"

  // -- props --
  // the list of posts
  export let posts = []

  // -- view --
  // -- v/date
  const dfmt = new Intl.DateTimeFormat(undefined, {
    year: "2-digit",
    month: "2-digit",
    day: "numeric"
  })

  const tfmt = new Intl.DateTimeFormat(undefined, {
    timeStyle: "short"
  })

  function formatDate(str) {
    const date = new Date(str)
    const dstr = dfmt.format(date)
    const tstr = tfmt.format(date).replace(" ", "").toLocaleLowerCase()

    return `${dstr}, ${tstr}`
  }
</script>

<template>
  <Header>
    <h1 class="Header-title">posts</h1>
    <h2 class="Header-subtitle">a shared writing stream</h2>
  </Header>

  {#each posts as post}
    <article class="Post">
      <header class="Post-header">
        <h1 class="Post-name">{post.name}</h1>
        <h2 class="Post-date">{formatDate(post.date)}</h2>
      </header>

      {@html post.body}
      <h2 class="Post-author">- {post.meta.author}</h2>
    </article>
  {/each}
</template>
