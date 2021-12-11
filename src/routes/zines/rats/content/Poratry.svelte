<script>
  import Link from "$lib/link.svelte"
</script>

<template>
  <article class="Poratry">
    <section class="Poratry-col">
      <article class="Poem--auto Poem">
        <Link href="/zines/rats/poems/poem4.jpg" block ext>
          <img
            src="/zines/rats/poems/poem4-thumb.jpg"
            alt="a poem: teeth of trash / carry on fucking / legends like the smell"
          />
        </Link>
      </article>

      <article class="Poem--auto Poem">
        <Link href="/zines/rats/poems/poem3.jpg" block ext>
          <img
            src="/zines/rats/poems/poem3-thumb.jpg"
            alt="a poem: scrabbling @ / blind feet / tails destroy hole / black queijo time / A smooth think / cheese raft"
          />
        </Link>
      </article>

      <article class="Poem--score Poem">
        <h1>family event ii (game night)</h1>
        <p>remove the game pieces from the box and give each player their player piece. set up the game board. put all of the player pieces in the nearest trash can, and shake the trash can (taking care to not let any trash escape). in turn order, search the trash can for your player piece, setting aside any pieces of trash you find. once all players have found their player piece, whoever has collected the most trash wins.</p>
      </article>

      <article class="Poem--auto Poem">
        <Link href="/zines/rats/poems/poem2.jpg" block ext>
          <img
            src="/zines/rats/poems/poem2-thumb.jpg"
            alt="a poem: raats last rat dear please / [branch right] you disgusting refuse are cutefinescrabblegood / [branch down] ratos on pizza gutter dirt & carrion AAA bugrats"
          />
        </Link>
      </article>
    </section>

    <section class="Poratry-col">
      <article class="Poem--auto Poem--large Poem">
        <Link href="/zines/rats/poems/poem5.jpg" block ext>
          <img
            src="/zines/rats/poems/poem5-thumb.jpg"
            alt="a poem: fast rats at pharmacy enraptured / league of bitter pizza / fast / loyal ears fast rapido / tight trash eveloped scrounging / stop / whatever crush"
          />
        </Link>
      </article>

      <article class="Poem--score Poem">
        <h1>family event i</h1>
        <p>enter a large pile of garbage. follow the sweet scent of rot, search gleefully. consume immediately and continue, or bring it home with you.</p>
      </article>

      <article class="Poem--auto Poem">
        <Link href="/zines/rats/poems/poem1.jpg" block ext>
          <img
            src="/zines/rats/poems/poem1-thumb.jpg"
            alt="a poem: cute jinx rubberband yummy / me the rat rat rat rat rat rat rat (rats / megamind sucks"
          />
        </Link>
      </article>

      <article class="Poem--score Poem">
        <h1>family event iii (rocks)</h1>
        <p>find some people. hide in a tight circle while they throw rocks into a pot lid without purpose. one may pull you by the tail as another attempts to smash the pot lid over your head (watch out for the rocks). shriek performatively but not farcically.</p>
      </article>
    </section>
  </article>
</template>

<style>
  .Poratry {
    display: flex;
    gap: 30px;
  }

  .Poratry-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .Poem {
    flex: 1;
  }

  .Poem--auto img {
    display: block;
    width: unset;
    height: unset;
  }

  .Poem--large {
    flex: 1.5;
  }

  .Poem--score > h1 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>