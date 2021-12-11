<script>
  import Header from "./header.svelte"
  import Row from "./row.svelte"
  import Intro from "./intro.svelte"
  import Warning from "./warning.svelte"
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
      <Intro />
    </Row>

    <Row>
      <Warning>
        get<br>ready<br>to<br>play<br>some<br>thing
      </Warning>
    </Row>

    <Row>
      <div class="Ratjam Frame">
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

    <div class="RowSpacer"></div>

    <Row>
      <div class="Frame">
        <iframe
          class="WingsOfRat-frame flex-frame"
          title="wings of rat"
          src="https://apondlife.github.io/rats/wings%20of%20rat/Build/rat/index.html"
        />
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">click to start</p>
        <p class="Sidenote" style="margin-top: 30px;">use the WASD or arrow keys to fly around</p>
        <p class="Sidenote" style="margin-top: 180px;">this game is inspired by a movie called 'wings of desire'</p>
        <p class="Sidenote" style="margin-top: 60px;">the music is a track by 'wendy' called 'melody of life'</p>
      </aside>
    </Row>

    <div class="RowSpacer"></div>

    <Row>
      <div class="Frame">
        <iframe
          class="flex-frame"
          width="671"
          height="503"
          src="https://www.youtube.com/embed/5g3lBt8y5js?autoplay=0&modestbranding=1&showinfo=0&controls=0"
          title="rat dnb"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">we didn't make this</p>
        <p class="Sidenote" style="margin-top: 30px;">youtube user lokirat made it</p>
      </aside>
    </Row>

    <div class="RowSpacer"></div>

    <Row>
      <div class="RatTickling Frame">
        <iframe
          class="RatTickling-frame flex-frame"
          title="rat tickling"
          src="https://storage.googleapis.com/ecourses/Rat%20Tickling%20Certification/story_html5.html"
        ></iframe>
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

  .RowSpacer {
    margin-top: 15vh;
    margin-bottom:  15vh;
  }

  /* -- elements -- */
  /* -- e/frame */
  .Frame {
    padding: 30px;
    background-color: #1c1c1a;
    border: 10px solid #262626;
    border-radius: 2px;
    box-shadow: 20px 20px 40px -25px black;

    display: flex;
  }

  .Frame > * {
    border-radius: 2px;
  }

  .flex-frame {
    flex: 1;
  }

  /* -- e/sidenote */
  .Sidenote {
    position: relative;
    width: 100px;
    margin-left: 50px;
  }

  .Sidenote::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 100%;
    left: -40px;
    background: linear-gradient(to left, #0909094d, transparent);
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
    animation: HueRotate 5s linear infinite alternate;
  }

  @keyframes HueRotate {
    from {
      filter: sepia(0.1) hue-rotate(0deg) saturate(3) invert(1) sepia(0.6);
    }
    to {
      filter: sepia(0.1) hue-rotate(360deg) saturate(3) invert(1) sepia(0.6);
    }
  }
</style>
