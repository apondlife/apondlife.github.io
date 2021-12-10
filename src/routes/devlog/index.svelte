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
      <h1 class="Section-title">10/25</h1>

      <div class="LogEntry-body">
        <p>in-person evaluations with shawn and eric</p>
        <p>ordered bike parts</p>
        <p>read dada manifesto</p>
        <p>retro at ali's</p>
        <p>began exploring website templating solutions</p>
        <p>delayed games in the grass event to the following weekend (due to bad weather)</p>
      </div>
    </article>

    <article class="LogEntry Section">
      <h1 class="Section-title">10/18</h1>

      <div class="LogEntry-body">
        <p>started tiktok</p>
        <p>submitted milestone evaluation</p>
        <p>hosted <Link href="/gitg/events#gitg2" text="games in the grass 2 at fort greene!" /></p>
        <p>interviewed for <Link href="https://twitter.com/IndieCade/status/1451924371476418561?s=20" text="indiecade (on stream)" /></p>
        <p>checked in on room 205 progress</p>
      </div>
    </article>

    <article class="LogEntry Section">
      <h1 class="Section-title">10/11</h1>

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
      <h1 class="Section-title">10/4</h1>

      <div class="LogEntry-body">
        <p>hosted <Link href="/gitg/events#gitg1" text="willoughby event!" /></p>
        <p>attended meeting for NYU Prototyping Fund</p>
        <p>logo created!</p>
        <p>started twitter</p>
        <p>fixed frogforg (after it was broken for event)</p>
      </div>
    </article>

    <article class="LogEntry Section">
      <h1 class="Section-title">9/28</h1>

      <div class="LogEntry-body">
        <p>applied to Culture Push grant</p>
        <p>wrote design brief for thesis milestone</p>
        <p>reached out to Logan for a battery</p>
        <p>frogforg on a TV for playtest thursday</p>
        <p>fixed android issues for frogforg</p>
        <p>added godmode to frogforg</p>
        <p>hosted <Link href="/gitg/events#gitg0" text="games in the grass at prospect park!" /></p>
        <p>started website</p>
      </div>
    </article>
  </main>
</template>
