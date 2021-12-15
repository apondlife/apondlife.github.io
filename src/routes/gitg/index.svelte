<script>
  import Header from "$lib/header.svelte"
  import Gitg from "$lib/gitg.svelte"
  import Pondlife from "$lib/pondlife.svelte"
</script>

<svelte:head>
  <!-- info -->
  <title>gitg</title>
</svelte:head>

<template>
  <Header>
    <h1 class="Header-title"><Gitg /></h1>
    <h2 class="Header-subtitle">parties by <Pondlife /></h2>
  </Header>

  <main class="Home">
    <section id="what" class="Section">
      <h1 class="Section-title">what</h1>
      <p>
        game-forward-parties trying to blur the boundaries between games, art, folk games, and videogames. in the spirit of the
        New Games movement, these sometimes reclaim public space for play and community, weaving pop-up art and videogame
        installations with the free play of physical and folk games.
      </p>
    </section>
  </main>
</template>
