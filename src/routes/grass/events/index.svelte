<script>
  import Header from "$lib/header.svelte"
  import Link from "$lib/link.svelte"
  import Gitg from "$lib/gitg.svelte"
</script>

<svelte:head>
  <title>gitg - events</title>
</svelte:head>

<template>
  <Header>
    <h1 class="Header-title">our events</h1>
    <h2 class="Header-subtitle">a list of <Gitg /> events</h2>
  </Header>

  <main class="Events">
    <section class="Section">
      <h1 class="Section-title">events</h1>

      <div class="EventList">
        <article id="gitg0" class="Event">
          <h1 class="Event-title">gitg #0</h1>

          <p class="Event-metadata">prospect park, 10.02.21</p>

          <div class="Event-body">
            we played some games in prospect park, our first real playtest. we attempted to project
            <Link text="frogf.org" href="http://frogf.org/" />, but ran into server issues and
            had to abandon it. we ended up streaming the super mario bros. movie, vibing, and playing some folk games (in the
            grass!). even at this first event, <Link text="new" href="/grass/games#zending" /> <Link text="new" href="/grass/games#lightbox" /> games were invented!
            it felt vital.
          </div>
        </article>

        <article id="gitg1" class="Event">
          <h1 class="Event-title">gitg #1</h1>

          <p class="Event-metadata">willoughby streets, 10.06.21</p>

          <div class="Event-body">
            we were invited to have a spot in the event willoughby walks, organized by
            <Link text="downtown brooklyn" href="https://www.downtownbrooklyn.com" />. we were
            able to get a battery from itp, and had a tv screen running
            <Link text="frogf.org" href="http://frogf.org/" />, which was now fixed. some of our
            computers had problems with connecting to the website, but we eventually sorted it out. we then had the problem of how
            to get people to interact with us. since there were only four of us present at this time, and one of us tasked with
            documenting, it was hard to start something that seemed active enough to draw peoples attention. we invented the
            <Link text="forkgame" href="/grass/games#forkgame" />, which we got to play with at least two strangers, and felt great. we also had
            some games from the new games movement to play, which we did once more of our friends arrived. some people seemed
            interested, spectating, but none actively joined us, and it was weird to go ask them, especially once we were a big
            group. in the end, we had a giant jenga tower, and a passerby joined very enthusiastically, and a couple others
            spectated, which much enthusiasm as well. there's probably a great video of it somewhere. our energy lasted for around
            2 hours, and then we just left. it was very fun, but also very exausting.
          </div>
        </article>

        <article id="gitg2" class="Event">
          <h1 class="Event-title">gitg #2</h1>

          <p class="Event-metadata">fort greene park, 10.25.21</p>

          <div class="Event-body">
            our event the previous weekend was rained out, and we overlapped with a lot of other game center social events, so we
            decided to move the event to fort greene this week. a few hours before the event the forecast turned towards rain, but
            we weren't about to cancel a second week in a row. it did rain. we brought a tarp. we discovered a new game or two. a
            cooperative
            <Link text="balloon relay" href="/grass/games#balloon-relay" />
            played against the wind. we also tried to
            <Link text="live score" href="https://nottingham-repository.worktribe.com/preview/2222989/Improvising_a_Live_Score_to_an_InteractiveBrain_Controlled_Film.pdf" />
            this event with a guitar and some drumsticks. it was pretty fun, at least for the person scoring, and works well with props
            that have predictable motion (like the balloon).
            <br /><br />
            a thing we observed is that there is a fine line we're treading right now between "event" and "party", where the former
            is higher pressure on us than the latter. at the moment, these feel more like parties. if there is an expectation that
            we're presenting "a thing", we're not necessarily able to deliver (yet?). we probably want to avoid <em>Events</em>
            where games and play are administered top-down by those facilitating. a thing that might be cool is writing up a "menu"
            of games for that evening that people can look at, play themselves, ask to play, &c.
            <br /><br />
            we're still working on our streaming setup. out tethered internet doesn't seem reliable enough to keep a stream running
            smoothly. the stream is a nice game prop, something for everyone to play around in, to try and stay in (or out) of frame.
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
