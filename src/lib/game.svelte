<script>
  export let body = "a game without a description"
  export let discovered = null // event
  // export let discovered = {
  // href: "/events#gitg1",
  // name: "gitg #1"
  // } // event
  export let found = null // link
  // export let found = {
  // href: " ",
  // name: "well played game",
  // author: {
  // name: bernie dekoven,
  // href: https://www.deepfun.com/bernie-dekoven-fun-theorist,
  // }
  // } // event
  export let id = "gameid"
  export let title = "untitled game"
</script>

<article class="Game">
  <h1 {id} class="Game-title">{title}</h1>

  <p class="Game-metadata">
    {#if discovered != null}
      discovered: <a href={discovered.href}>{discovered.name}</a>
      {#if discovered.author != null}
        by
        <a href={discovered.author.href} target="blank" rel="noopener noreferrer">{discovered.author.name}</a>
      {/if}
    {/if}
    {#if found != null}
      found: <a href="/events#gitg1">gitg #1</a>
      <a href={found.href} target="blank" rel="noopener noreferrer">{found.name}</a>
      {#if found.author != null}
        by
        <a href={found.author.href} target="blank" rel="noopener noreferrer">{found.author.name}</a>
      {/if}
    {/if}
  </p>

  <div class="Game-body">
    <slot />
  </div>
</article>
