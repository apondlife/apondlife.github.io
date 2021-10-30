<script>
  import Header from "@lib/header.svelte"
</script>

<svelte:head>
  <!-- info -->
  <title>gitg</title>
</svelte:head>

<template>
  <Header>
    <h1 class="Header-title">
      <a class="Link--games" href="/games">games</a>
      <a class="Link--devlog" href="/devlog">in</a>
      the
      <a class="Link--events" href="/events">grass</a>
    </h1>

    <h2 class="Header-subtitle">play and games in public spaces</h2>
  </Header>

  <main class="Home">
    <a href="/events/0/images/projector.jpg" target="_blank" rel="noopener noreferrer">
      <img
        class="Home-hero"
        src="/events/0/images/projector-thumb.jpg"
        width="600"
        alt="four feet in a box of light projected into the grass"
      />
    </a>

    <section id="who" class="Section">
      <h1 class="Section-title">who</h1>
      <p>ali, darwin, fran, mut, ty</p>
    </section>

    <section id="what" class="Section">
      <h1 class="Section-title">what</h1>
      <p>
        a series of events blurring the boundaries between games, art, folk games, and videogames. in the spirit of the New Games
        movement, these events reclaim public space for play and community, weaving pop-up art and videogame installations with
        the free play of physical and folk games.
      </p>
    </section>

    <section id="portfolio" class="Section">
      <h1 class="Section-title">portfolio</h1>
      <p>links to our external itch.io profiles</p>
      <ul>
        <li><a href="https://aaaaaugh.itch.io/" target="_blank" rel="noopener noreferrer">ali</a></li>
        <li><a href="https://gurnburial.itch.io/" target="_blank" rel="noopener noreferrer">darwin</a></li>
        <li><a href="https://frojo.itch.io/" target="_blank" rel="noopener noreferrer">fran</a></li>
        <li><a href="https://muts.itch.io/" target="_blank" rel="noopener noreferrer">mut</a></li>
        <li><a href="https://tycobbb.itch.io/" target="_blank" rel="noopener noreferrer">ty</a></li>
      </ul>
    </section>
  </main>
</template>
