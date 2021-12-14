<script>
  import Header from "@lib/header.svelte"
  import Link from "@lib/link.svelte"
  import Pondlife from "@lib/pondlife.svelte"
</script>

<svelte:head>
  <!-- info -->
  <title>gitg</title>
</svelte:head>

<template>
  <Header>
    <h1 class="Header-title">zinelikes</h1>
    <h2 class="Header-subtitle">by <Pondlife /></h2>
  </Header>

  <main class="Home">
    the <Link text="rats" href="/zines/rats" /> zinelike.
  </main>
</template>
