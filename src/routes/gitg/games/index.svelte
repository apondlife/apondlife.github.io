<script>
  import Header from "$lib/header.svelte"
  import Game from "$lib/game.svelte"
  import Link from "$lib/link.svelte"
  import Gitg from "$lib/gitg.svelte"
</script>

<svelte:head>
  <title>gitg - games</title>
</svelte:head>

<template>
  <Header>
    <h1 class="Header-title">a game history</h1>
    <h2 class="Header-subtitle">games we've played at <Gitg /></h2>
  </Header>

  <main class="Games">
    <section class="Section">
      <h1 class="Section-title">video</h1>

      <article class="Game">
        <h1 id="frogforg" class="Game-title">
          <Link text="frogf.org" href="http://frogf.org" />
        </h1>

        <p class="Game-metadata">
          first played: <Link text="gitg #1" href="/gitg/events#gitg1" />
        </p>

        <div class="Game-body">
          <p>a flatgame mmo</p>
          <p>
            a reskin of <Link text="walky.space" href="http://walky.space/" /> by max bittker
          </p>
          <p>a website where you are a frog walking around an endless magenta expanse</p>
          <p>you can add or move photos around the space</p>
          <p>
            frogf.org can be projected onto a large screen (in combination with gorfmode), and then players can participate by
            going to frogf.org on their phones
          </p>
          <p>spawned the videofolkgame <Link text="magenta is lava" href="#magenta-is-lava" /></p>
        </div>
      </article>
    </section>

    <section class="Section">
      <h1 class="Section-title">folk</h1>

      <div class="GameList">
        <article class="Game">
          <h1 id="forkgame" class="Game-title">forkgame</h1>

          <p class="Game-metadata">
            discovered: <Link text="gitg #1" href="/gitg/events#gitg1" />
          </p>

          <div class="Game-body">
            this is one that you might be able to play at a cafeteria, also a reason to not throw away plastic forks. it is
            currently a game for 2, but maybe it can be played with many. place a quarter in a plastic fork, ideally by
            alternating the tines (I had to look up
            <Link text="this fork diagram" href="https://www.homenish.com/wp-content/uploads/2021/04/Parts-of-a-Fork.jpg" />),
            just like the picture below. your objective is now to drop your opponents quarter without dropping your own. its a
            very sensitive game. our swordfigher friend consistently won, so even if it may seem random, theres a lot of skill
            involved. make sure to have some fun start of the match ritual, and a very flamboyant fencing pose. en garde!
          </div>
        </article>

        <article id="darkroom" class="Game">
          <h1 class="Game-title">darkroom</h1>

          <p class="Game-metadata">
            found:
            <Link text="the infinite playground" href="https://www.indiebound.org/book/9780262543866" />
            by
            <Link text="bernie dekoven" href="https://www.deepfun.com/bernie-dekoven-fun-theorist" />
          </p>

          <div class="Game-body">
            an imagination game for any number of people (even one). you all close your eyes, lie down if you’re so inclined, and
            imagine you’re in a darkroom developing a photo. it’s sitting in a tray of developer, currently blank. the goal is not
            to invent anything, but to describe whatever you actually see in your imagination. when you notice something, say it
            out loud. at a certain point you’ll all know the photo is done, and you can take it out of the tray and develop the
            next one.
          </div>
        </article>

        <article id="lightbox" class="Game">
          <h1 class="Game-title">lightbox</h1>

          <p class="Game-metadata">
            discovered: <Link text="gitg #0" href="/gitg/events#gitg0" />
          </p>

          <div class="Game-body">
            one person holds a projector towards the ground, pretty high up so to people can fit in the box of light it creates.
            it's nice if you put something fun on the screen. slowly lower the projector towards the ground while the two people
            in the box try and squeeze each other out of the space as it gets smaller.
          </div>
        </article>

        <article id="handland" class="Game">
          <h1 class="Game-title">handland</h1>

          <p class="Game-metadata">
            found:
            <Link text="the infinite playground" href="https://www.indiebound.org/book/9780262543866" />
            by
            <Link text="bernie dekoven" href="https://www.deepfun.com/bernie-dekoven-fun-theorist" ext />
          </p>

          <div class="Game-body">
            like <Link text="darkroom" href="/gitg/games#darkoom" /> but with sight and hand touching. line on your backs in a circle with your heads
            pointed towards one another. inch together until those heads are touching or almost touching, as close as you can comfortably
            get right now. raise your hands into the sky and look up at this new digital world. introduce your hands to one other,
            talk to the local deity. the possibilities are endless.
          </div>
        </article>

        <article class="Game">
          <h1 id="zending" class="Game-title">zending</h1>

          <p class="Game-metadata">
            discovered: <Link text="gitg #0" href="/gitg/events#gitg0" />
          </p>

          <div class="Game-body">
            this is one to play before you all head home. everyone puts their hands in the middle and pick a word to say together
            on the count of 5. like, "turtle on 5!". then try to count to 5, but each person is only allowed to say one number in
            a row, and if two people say a number at the same time, you start over. when you get to 5, shout your word, throw your
            hands in the air, and head home. you could play to a different number if you're feeling up for it.
          </div>
        </article>

        <article class="Game">
          <h1 id="balloon-relay" class="Game-title">balloon relay</h1>

          <p class="Game-metadata">
            discovered: <Link text="gitg #2" href="/gitg/events#gitg2" />
          </p>

          <div class="Game-body">
            this game is to be played with a balloon on a windy day. the point is to try getting the balloon as far as possible
            against the wind. you know the feeling of bouncing a balloon on a windy day, and the lack of control, but pure fun, it
            causes. this game takes that and makes a cooperative version of not letting the balloon touch the floor. in a very
            classic move chosing the most intense adversary, the wind, and the most arbitrary constraint, going against the wind
            and each player not allowed to hit the ball twice in a row. the grasshopper would approve. we even have a
            <Link text="tiktok" href="https://vm.tiktok.com/ZM8UAu6YA/" />
            of it to help you visualize it better!
          </div>
        </article>

        <Game
          id="candlejoust"
          title="candle joust"
          discovered={{
            href: "https://www.wonderville.nyc/events/haunted-arcade-10-31",
            name: "haunted arcade @ wonderville"
          }}
        >
          <p>
            we all know playing with candles is fun. this one is simple, for as many players as you can (we played with 2 and 3).
            lit up your candles, and don't let people turn yours off. protect yours and blow theirs, just dont move too fast
            creating wind for yourself.
          </p>
          <p>
            a nice thing about this one is that you will also be litting each others candles to restart the game, creating a back
            and forth of collaboration and competition. also, it just looks nice.
          </p>
        </Game>
      </div>
    </section>

    <section class="Section">
      <h1 class="Section-title">videofolk</h1>
      <article class="Game">
        <h1 id="magenta-is-lava" class="Game-title">magenta is lava</h1>

        <p class="Game-metadata">
          discovered: <Link text="gitg #1" href="/gitg/events#gitg1" />
        </p>

        <div class="Game-body">
          <p>
            a many-player game played on
            <Link text="frogf.org" href="http://frogf.org" />
          </p>
          <p>each player will need a device with an internet browser in order to play</p>
          <p>one frog is It. whoever is It tries to tag another frog by touching them on screen</p>
          <p>if you get tagged, you are now It</p>
          <p>(tag rules but in a virtual space)</p>
          <p>you can cannot walk on the magenta part</p>
          <p>you are allowed to add, move or take away photos</p>
          <p>BUT you cannot move or take away a photo if there is another frog on it</p>
        </div>
      </article>
    </section>
  </main>
</template>
