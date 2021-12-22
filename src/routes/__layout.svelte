<svelte:head>
  <!-- scrapers -->
  <meta property="og:title" content="games in the grass" />
  <meta property="og:type" content="event" />
  <meta property="og:url" content="https://gamesinthegrass.github.io" />
  <meta property="og:image" content="https://gamesinthegrass.github.io/events/0/images/projector-thumb.jpg" />

  <meta
    property="og:description"
    content="a series of events blurring the boundaries between games, art, folk games, and videogames."
  />

  <!-- styles -->
  <link href="/app.css" rel="stylesheet" />
</svelte:head>

<script>
  import Footer from "$lib/footer.svelte"
</script>

<div class="Page">
  <slot />
  <Footer />
</div>
