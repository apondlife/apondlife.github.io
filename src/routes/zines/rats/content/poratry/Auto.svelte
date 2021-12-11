<script>
  import Link from "$lib/link.svelte"
  import { cx } from "$lib/utils.js"

  // the image soruce url
  export let src = ""

  // the image thumbnail url
  export let thm = ""

  // the image alt text
  export let alt = ""

  // if this is a large image
  export let large = false
</script>

<template>
  <article
    class={cx(large && "Auto--large", "Auto")}
  >
    <Link href={src} block ext>
      <img
        class="Auto-img"
        src={thm}
        alt={alt}
      />
    </Link>
  </article>
</template>

<style>
  .Auto {
    flex: 1;
  }

  .Auto--large {
    flex: 1.5;
  }

  .Auto-img {
    display: block;
    width: unset;
    height: unset;
  }
</style>