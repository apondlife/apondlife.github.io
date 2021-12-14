<script>
  import Link from "$lib/link.svelte"

  // the id of the header
  export let id = ""
</script>

<template>
  <header id={id} class="RatsHeader">
    <h1>rats</h1>
    <h2><Link href="/" text="pondlife" /> issue #0</h2>
  </header>
</template>

<style>
  .RatsHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .RatsHeader h1 {
    margin-top: -0.3em;
    font-size: 16em;
    color: var(--fg-color-dark);
  }

  .RatsHeader h2 {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 1.5em;
  }
</style>
