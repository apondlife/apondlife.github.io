<script>
  import Link from "$lib/link.svelte"

  // the image soruce url
  export let src = ""

  // the image thumbnail url
  export let thm = ""

  // the image alt text
  export let alt = ""
</script>

<template>
  <article class="Auto">
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Auto-img {
    display: block;
    width: unset;
    height: unset;
  }
</style>