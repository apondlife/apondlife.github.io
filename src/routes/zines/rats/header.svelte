<script>
  import Link from "$lib/link.svelte"
</script>

<template>
  <header class="RatsHeader">
    <h1>rats</h1>
    <h2><Link href="/" text="pondlife" /> issue #0</h2>
  </header>
</template>

<style>
  .RatsHeader {
    text-align: center;
    padding-top: 28vh;
    padding-bottom: 28vh;
  }

  .RatsHeader h1 {
    font-size: 16em;
  }

  .RatsHeader h2 {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 1.5em;
  }
</style>
