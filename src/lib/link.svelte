<script>
  // the link url
  export let href = ""

  // the link text, if any
  export let text = ""

  // if the link is external (tabbed)
  export let ext = href.startsWith("http")

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
</script>

<template>
  <a {href} {...props} {...$$restProps}>
    {#if text !== ""}
      {text}
    {:else}
      <slot />
    {/if}
  </a>
</template>