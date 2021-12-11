<script>
  import Header from "./elements/Header.svelte"
  import Row from "./elements/Row.svelte"
  import Warning from "./elements/Warning.svelte"
  import Loader from "./elements/Loader.svelte"
  import Intro from "./content/Intro.svelte"
  import Poratry from "./content/Poratry.svelte"
  import OnRats from "./content/OnRats.svelte"
</script>

<svelte:head>
  <title>rats</title>
</svelte:head>

<template>
  <img
    src="/zines/rats/fur.jpg"
    alt="very nice rat fur texture"
    class="Rats-texture"
  />

  <main class="Rats">
    <Header />

    <Row>
      <div class="Frame--line Frame">
        <Intro />
      </div>
    </Row>

    <Row --top="30vh">
      <Warning>
        get<br>ready<br>to<br>play<br>some<br>thing
      </Warning>
    </Row>

    <Row --top="30vh">
      <div class="Ratjam Frame--fancy Frame">
        <iframe
          class="flex-frame"
          title="ratjam"
          src="https://apondlife.github.io/rats/ratjam"
        />
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">you can click & hold for the rat to chase the cheese</p>
        <p class="Sidenote" style="margin-top: 30px;">the rat loves the cheesee</p>
        <p class="Sidenote" style="margin-top: 80px;">use the muscles in your head to rotate your eyes into different positions. this will allow you to look at different parts of the painting</p>
        <p class="Sidenote" style="margin-top: 60px;">the rat loves painting</p>
      </aside>
    </Row>


    <Row --top="30vh">
      <Warning>
        now<br>for<br>some<br>po<br>rat<br>try
      </Warning>
    </Row>

    <Row --top="30vh">
      <Poratry />

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">we did some automatic writing</p>
        <p class="Sidenote" style="margin-top: 100px;">about<br>rats</p>
        <p class="Sidenote" style="margin-top: 460px;">as well as some fluxus scores</p>
        <p class="Sidenote" style="margin-top: 75px;">about<br>rats</p>
        <p class="Sidenote" style="margin-top: 200px;">we are serious artists</p>
      </aside>
    </Row>

    <Row --top="30vh">
      <div class="Frame--line Frame">
        <OnRats />
      </div>
    </Row>

    <Row --top="30vh">
      <div class="WingsOfRat Frame--fancy Frame">
        <Loader>
          <iframe
            slot="content"
            class="WingsOfRat-frame flex-frame"
            title="wings of rat"
            src="https://apondlife.github.io/rats/wings%20of%20rat/Build/rat/index.html"
          />

          <img
            slot="loader"
            class="WingsOfRat-frame"
            src="/zines/rats/games/wings-of-rat-thumb.jpg"
            alt="a rat w/ wings on a new york street"
          />
        </Loader>
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">click to start</p>
        <p class="Sidenote" style="margin-top: 30px;">use the WASD or arrow keys to fly around</p>
        <p class="Sidenote" style="margin-top: 180px;">this game is inspired by a movie called 'wings of desire'</p>
        <p class="Sidenote" style="margin-top: 60px;">the music is a track by 'wendy' called 'melody of life'</p>
      </aside>
    </Row>

    <Row --top="30vh">
      <div class="Frame">
        <iframe
          class="flex-frame"
          width="671"
          height="503"
          src="https://www.youtube.com/embed/5g3lBt8y5js?playlist=5g3lBt8y5js&autoplay=0&modestbranding=1&showinfo=0&controls=0&loop=1"
          title="rat dnb"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">we didn't make this</p>
        <p class="Sidenote" style="margin-top: 30px;">youtube user lokirat made it</p>
      </aside>
    </Row>

    <Row --top="30vh">
      <div class="RatTickling Frame">
        <iframe
          class="RatTickling-frame flex-frame"
          title="rat tickling"
          src="https://storage.googleapis.com/ecourses/Rat%20Tickling%20Certification/story_html5.html"
        />
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">we didn't make this</p>
        <p class="Sidenote" style="margin-top: 30px;">it's produced by the purdue agriculture gaskill lab</p>
        <p class="Sidenote" style="margin-top: 30px;">we applied some css filters</p>
      </aside>
    </Row>
  </main>
</template>

<style>
  /* -- globals -- */
  :global(*) {
    box-sizing: border-box;
    overscroll-behavior: none;
  }

  :global(body) {
    --bg-color: #151515;
    --fg-color: #ac9898;
    --fg-color-dark: #937b7b;

    background-color: var(--bg-color);
    color: var(--fg-color);
    font-size: 16px;
    line-height: 1.3;
  }

  :global(a) {
    color: #ff81ce;
    text-decoration: none;
  }

  :global(a:hover) {
    text-decoration: underline;
  }

  /* -- resets -- */
  :global(iframe) {
    border: none;
  }

  /* -- page -- */
  .Rats {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 30vh;
  }

  .Rats-texture {
    position: fixed;
    width: 100vw;
    height: 100vh;
    opacity: 0.2;
    mix-blend-mode: color-dodge;
  }

  /* -- elements -- */
  /* -- e/frame */
  .Frame {
    display: flex;
    border-radius: 2px;
    box-shadow: 20px 20px 40px -25px black;
  }

  .Frame > * {
    border-radius: 2px;
  }

  .Frame--line {
    padding: 20px;
    border: 1px solid var(--fg-color-dark);
  }

  .Frame--fancy {
    padding: 25px;
    background-color: #1c1c1a;
    border: 5px solid #262626;
  }

  .flex-frame {
    flex: 1;
  }

  /* -- e/sidenote */
  .Sidenote {
    box-sizing: content-box;
    position: relative;
    width: 100px;
    margin-left: 30px;
    padding-left: 20px;
    border-left: 1px dashed var(--fg-color-dark);
  }

  /* -- arts -- */
  .Ratjam {
    width: 960px;
    height: 600px;
  }

  /*.Ratjam-frame {
    flex: 1;
  }*/

  /* content is 16:9 */
  .WingsOfRat-frame {
    width: 880px;
    height: 495px;
  }

  /* external rattickling content size: 980 x 658 */
  .RatTickling {
    width: 980px;
    height: 658px;
  }

  .RatTickling-frame {
    /* just scaling down the iframe content to avoid scroll bars:  i don't really know how this works */
    --RatTickling-scale-factor: 0.8 ;
    min-width: calc(1/var(--RatTickling-scale-factor)*100%);
    min-height: calc(1/var(--RatTickling-scale-factor)*100%);
    transform: scale(var(--RatTickling-scale-factor));
    transform-origin: 0 0;
    animation: HueRotate 30s linear infinite alternate;
  }

  @keyframes HueRotate {
    from {
      /*filter: sepia(0.1) hue-rotate(0deg) saturate(3) invert(1) sepia(0.6);*/
      filter:  brightness(0.6) sepia(0.3) contrast(1.1) hue-rotate(0deg) saturate(2);
    }
    to {
      /*filter: sepia(0.1) hue-rotate(360deg) saturate(3) invert(1) sepia(0.6);*/
      filter:  brightness(0.6) sepia(0.3) contrast(1.1) hue-rotate(180deg) saturate(2);
    }
  }
</style>
