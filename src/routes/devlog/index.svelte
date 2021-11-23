<script>
  import Header from "@lib/header.svelte"
  import Link from "@lib/link.svelte"
</script>

<svelte:head>
  <title>gitg - devlog</title>
</svelte:head>

<template>
  <Header>
    <h1 class="Header-title">devlog</h1>
    <h2 class="Header-subtitle">weekly summaries of what we're up to</h2>
  </Header>

  <main class="Log">
    <article class="LogEntry Section">
      <h1 class="Section-title">10/17</h1>

      <div class="LogEntry-body">
        <p>started tiktok</p>
        <p>submitted milestone evaluation</p>
        <p>hosted <Link text="games in the grass 2 at fort greene!" href="/events#gitg2" /></p>
        <p>interviewed for <Link text="" href="https://twitter.com/IndieCade/status/1indiecade (on stream)451924371476418561?s=20" /></p>
        <p>checked in on room 205 progress</p>
      </div>
    </article>

    <article class="LogEntry Section">
      <h1 class="Section-title">10/10</h1>

      <div class="LogEntry-body">
        <p>retro! (at ali's place)</p>
        <p>met with naomi on thurs.</p>
        <p>created event checklist for park</p>
        <p>started instagram</p>
        <p>(unsuccessfully) debugged frogforg websockets issue</p>
        <p>rainchecked games in the grass</p>
      </div>
    </article>

    <article class="LogEntry Section">
      <h1 class="Section-title">10/3</h1>

      <div class="LogEntry-body">
        <p>hosted <Link text="willoughby event!" href="/events#gitg1" /></p>
        <p>attended meeting for NYU Prototyping Fund</p>
        <p>logo created!</p>
        <p>started twitter</p>
        <p>fixed frogforg (after it was broken for event)</p>
      </div>
    </article>

    <article class="LogEntry Section">
      <h1 class="Section-title">9/27</h1>

      <div class="LogEntry-body">
        <p>applied to Culture Push grant</p>
        <p>wrote design brief for thesis milestone</p>
        <p>reached out to Logan for a battery</p>
        <p>frogforg on a TV for playtest thursday</p>
        <p>fixed android issues for frogforg</p>
        <p>added godmode to frogforg</p>
        <p>first <Link text="games in the grass at prospect park!" href="/events#gitg0" /></p>
        <p>started website</p>
      </div>
    </article>
  </main>
</template>
