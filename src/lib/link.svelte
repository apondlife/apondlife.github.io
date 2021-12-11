<script>
  import { cx } from "$lib/utils.js"

  // the link url
  export let href = ""

  // the link text, if any
  export let text = ""

  // if the link is external (tabbed)
  export let ext = href.startsWith("http")

  // if the link is block style
  export let block = false

  // build link props
  let props = {}

  // add external props
  if (ext) {
    props = {
      ...props,
      target: "_blank",
      rel: "noopener noreferrer"
    }
  }

  // build class list
  const klass = cx(
    "Link",
    block && "Link--block"
  )
</script>

<template>
  <a class={klass} {href} {...props} {...$$restProps}>
    {#if text !== ""}
      {text}
    {:else}
      <slot />
    {/if}
  </a>
</template>

<style>
  .Link--block {
    display: block;
  }
</style>