<script>
  import Link from "$lib/link.svelte"
</script>

<template>
  <article class="Arats">
    <h1>all<br>rats<br>act<br>the<br>same</h1>

    <h2>oh, no…</h2>
    <p>there are a bunch of rats in the subway station. rats are gross; the sight of them disgusts & terrifies you. but they love the subway station, and they love you.</p>
    <p>and they all act the same.</p>

    <h2>this game</h2>
    <p>is a larp or theatre game for as many players as your space allows.</p>
    <p>you'll need two spaces: the <strong>station</strong> and the <strong>train</strong>. the station fits everyone, comfortably, big enough for them to mill around. the train is an adjacent space that fits everyone, uncomfortably.</p>
    <p>one or more players should play the facilitator. they make sure the game gets up and running, but they get to play, too.</p>
    <p>one or more players should play the conductor. they drive the train, call out stops, &c. they set the pace of the game. the same player(s) may be both facilitator and conductor.</p>

    <h2>this document</h2>
    <p>is for the facilitator of the game. other players should not read this document. if you are not the facilitator, you should stop reading here.</p>
    <p>as you read further, you'll see indented block quotes, like: </p>
    <blockquote>don't forget that "all rats act the same".</blockquote>
    <p>read these quotes aloud to players. of course, feel free to paraphrase anything you'd like as you're explaining the game (anything, that is, except the phrase "all rats act the same").</p>
    <p>in these block quotes, you may also see stage directions that indicate things you should say to specific players, like the conductor.</p>

    <footer class="Arats-footer">
      <Link
        href="https://apondlife.github.io/rats/arats/rules.pdf"
        text="...the full rules"
      />
    </footer>
  </article>
</template>

<style>
  .Arats {
    width: 600px;
    padding: 40px;
  }

  .Arats-footer {
    margin-top: 60px;
    font-size: 2em;
  }

  .Arats h1 {
    font-size: 6em;
    color: var(--fg-color-dark);
  }

  .Arats h2 {
    font-size: 2em;
    margin-top: 60px;
    color: var(--fg-color-dark);
  }

  .Arats p {
    margin-top: 20px;
  }
</style>
