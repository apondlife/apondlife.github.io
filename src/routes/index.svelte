<script>
  import Header from "@lib/header.svelte"
  import Link from "@lib/link.svelte"
  import Pondlife from "@lib/pondlife.svelte"
</script>

<svelte:head>
  <!-- info -->
  <title>pondlife</title>
</svelte:head>

<template>
  <Header>
    <h1 class="Header-title">
      <Pondlife />
    </h1>

    <h2 class="Header-subtitle">
      making and living games
    </h2>
  </Header>

  <main class="Home">
    <Link href="/events/0/images/projector.jpg" ext>
      <img
        class="Home-hero"
        src="/events/0/images/projector-thumb.jpg"
        width="600"
        alt="four feet in a box of light projected into the grass"
      />
    </Link>

    <section id="who" class="Section">
      <h1 class="Section-title">who</h1>
      <p>ali, darwin, fran, mut, ty</p>
    </section>

    <section id="what" class="Section">
      <h1 class="Section-title">what</h1>
      <p>
        game collections, zine-likes published on the web and hopefuly in print. we're searching
        for ways to make the games we want to make together while sustaining ourselves and others.
      </p>
    </section>

    <section id="portfolio" class="Section">
      <h1 class="Section-title">portfolio</h1>
      <p>links to our external itch.io profiles</p>
      <ul>
        <li><Link text="ali" href="https://aaaaaugh.itch.io/" /></li>
        <li><Link text="darwin" href="https://gurnburial.itch.io/" /></li>
        <li><Link text="fran" href="https://frojo.itch.io/" /></li>
        <li><Link text="mut" href="https://muts.itch.io/" /></li>
        <li><Link text="ty" href="https://tycobbb.itch.io/" /></li>
      </ul>
    </section>
  </main>
</template>
