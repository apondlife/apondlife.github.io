<script>
  import Header from "./elements/Header.svelte"
  import Row from "./elements/Row.svelte"
  import Warning from "./elements/Warning.svelte"
  import Loader from "./elements/Loader.svelte"
  import Intro from "./content/Intro.svelte"
  import Poratry from "./content/poratry/Poratry.svelte"
  import OnRats from "./content/OnRats.svelte"
  import Cratique from "./content/Cratique.svelte"

  function goHome() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
</script>

<svelte:head>
  <title>rats</title>
</svelte:head>

<template>
  <img src="/zines/rats/fur.jpg" alt="very nice rat fur texture" class="Rats-texture" />

  <main class="Rats">
    <Header />

    <!-- intro -->
    <Row>
      <div class="Frame--line Frame">
        <Intro />
      </div>
    </Row>

    <div
      class="Home"
      src="/images/logo-green.png"
      on:click={goHome}
      alt="a rat hole with a doormat that says home. there's a tail coming out of it."
    />

    <!-- get ready to play some thing -->
    <Row --top="30vh">
      <Warning>
        get<br />ready<br />to<br />play<br />some<br />thing
      </Warning>
    </Row>

    <!-- rat jam -->
    <Row --top="30vh">
      <div class="Ratjam Frame--fancy Frame">
        <iframe class="flex-frame" title="ratjam" src="https://apondlife.github.io/rats/ratjam" />
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">you can click & hold for the rat to chase the cheese</p>
        <p class="Sidenote" style="margin-top: 30px;">the rat loves the cheesee</p>
        <p class="Sidenote" style="margin-top: 80px;">
          use the muscles in your head to rotate your eyes into different positions. this will allow you to look at different
          parts of the painting
        </p>
        <p class="Sidenote" style="margin-top: 60px;">the rat loves painting</p>
      </aside>
    </Row>

    <!-- now some poratry -->
    <Row --top="30vh">
      <Warning>
        now<br />for<br />some<br />po<br />rat<br />try
      </Warning>
    </Row>

    <!--poratry-->
    <Row --top="30vh">
      <Poratry />

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">we did some automatic writing</p>
        <p class="Sidenote" style="margin-top: 100px;">about<br />rats</p>
        <p class="Sidenote" style="margin-top: 345px;">as well as some fluxus scores</p>
        <p class="Sidenote" style="margin-top: 75px;">about<br />rats</p>
        <p class="Sidenote" style="margin-top: 200px;">we are serious artists</p>
      </aside>
    </Row>

    <!-- on rats -->
    <Row --top="30vh">
      <div class="Frame--line Frame">
        <OnRats />
      </div>
    </Row>

    <!-- rat loving -->
    <Row --top="30vh">
      <div class="RatLoving Frame--fancy Frame">
        <Loader>
          <iframe
            slot="content"
            class="RatLoving-frame flex-frame"
            title="loving rats"
            src="https://apondlife.github.io/rats/ratloving/Build/index.html"
          />

          <img
            slot="loader"
            class="RatLoving-frame"
            src="/zines/rats/games/ratloving-thumb.jpg"
            alt="a lot of rats, possibly inside a bag"
          />
        </Loader>
      </div>
      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">click to start</p>
        <p class="Sidenote" style="margin-top: 30px;">move your cursor around to touch the rats</p>
        <p class="Sidenote" style="margin-top: 90px;">does it tickle?</p>
      </aside>
    </Row>

    <!-- tfarc rats ii -->
    <Row --top="30vh">
      <div class="Rats-II Frame--fancy Frame">
        <iframe class="flex-frame" title="tfarc rats ii" src="https://apondlife.github.io/rats/rats-ii" />
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">you can right click & hold to create new rats</p>
        <p class="Sidenote" style="margin-top: 30px;">a lot of new rats</p>
        <p class="Sidenote" style="margin-top: 50px;">the yellow box also selects them</p>
        <p class="Sidenote" style="margin-top: 90px;">left click drops a cheese, you remember the cheese</p>
        <p class="Sidenote" style="margin-top: 120px;">the selected rats all act the same.</p>
      </aside>
    </Row>

    <!-- net rat -->
    <Row --top="30vh">
      <Warning>
        have<br />you<br />heard<br />about<br />net<br />rat<br />?
      </Warning>
    </Row>

    <!-- labrat -->
    <Row --top="30vh">
      <div class="Labrat Frame--fancy Frame">
        <iframe class="flex-frame" title="labrat" src="https://apondlife.github.io/rats/labrat" />
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 30px;">this is what the internet should be like</p>
        <p class="Sidenote" style="margin-top: 50px;">its a webpage feel free to click around!</p>
      </aside>
    </Row>

    <!-- wings of rat -->
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

    <!-- rat youtube video -->
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

    <!-- here comes the video game -->
    <Row --top="30vh">
      <Warning>
        here<br />comes<br />the<br />video<br />game<br />tfarc<br />rats<br />ii
      </Warning>
    </Row>

    <!-- tfarc rats ii -->
    <Row --top="30vh">
      <div class="Rats-II Frame--fancy Frame">
        <iframe class="flex-frame" title="tfarc rats ii" src="https://apondlife.github.io/rats/rats-ii" />
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">you can right click & hold to create new rats</p>
        <p class="Sidenote" style="margin-top: 30px;">a lot of new rats</p>
        <p class="Sidenote" style="margin-top: 50px;">the yellow box also selects them</p>
        <p class="Sidenote" style="margin-top: 90px;">left click drops a cheese, you remember the cheese</p>
        <p class="Sidenote" style="margin-top: 120px;">the selected rats all act the same.</p>
      </aside>
    </Row>

    <!-- drawing rats -->
    <Row --top="30vh">
      <div class="Sketching">
        <div class="Portrat Frame--fancy Frame">
          <iframe class="flex-frame" title="portrat" src="https://apondlife.github.io/rats/portrat" />
        </div>

        <div class="Ratist Frame--fancy Frame">
          <iframe class="flex-frame" title="ratist" src="https://apondlife.github.io/rats/ratle" />
        </div>
      </div>

      <aside slot="right">
        <p class="Sidenote" style="margin-top: 00px;">click and drag to draw some rats</p>
        <p class="Sidenote" style="margin-top: 30px;">a lot of new rats</p>
        <p class="Sidenote" style="margin-top: 50px;">the yellow box also selects them</p>
        <p class="Sidenote" style="margin-top: 90px;">left click drops a cheese, you remember the cheese</p>
        <p class="Sidenote" style="margin-top: 120px;">the selected rats all act the same.</p>
      </aside>
    </Row>

    <!-- on rats -->
    <Row --top="30vh">
      <div class="Frame--line Frame">
        <Cratique />
      </div>
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
    font-family: "Baskerville", "Georgia", "Garamond", serif;
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

  /* -- e/home */
  .Home {
    width: 200px;
    height: 200px;
    cursor: pointer;
    position: sticky;
    top: 25px;
    /* bottom: 25px; */
    left: 50px;
    background-image: url("/zines/rats/homepage1.png");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height="40" width="40"><text x="0" y="9" font-size="30" dominant-baseline="hanging">🐀</text></svg>'),
      auto;
  }

  .Home:hover {
    background-image: url("/zines/rats/homepage2.png");
  }

  /* -- arts -- */
  .Ratjam {
    width: 960px;
    height: 600px;
  }

  .Labrat {
    width: 960px;
    height: 600px;
  }

  .Rats-II {
    overflow: hidden;
    width: 600px;
    height: 600px;
  }

  .Sketching {
    display: flex;
    align-items: center;
  }

  .Ratist {
    margin: 25px;
    height: 600px;
    width: 500px;
    aspect-ratio: 4/4.4;
  }

  .Portrat {
    margin: 25px;
    width: 922px;
    height: 400px;
  }

  /*.Ratjam-frame {
    flex: 1;
  }*/

  /* content is 16:9 */
  .WingsOfRat-frame {
    width: 880px;
    height: 495px;
  }

  .RatLoving-frame {
    width: 495px;
    height: 495px;
  }

  /* external rattickling content size: 980 x 658 */
  .RatTickling {
    width: 980px;
    height: 658px;
  }

  .RatTickling-frame {
    /* just scaling down the iframe content to avoid scroll bars:  i don't really know how this works */
    --RatTickling-scale-factor: 0.8;
    min-width: calc(1 / var(--RatTickling-scale-factor) * 100%);
    min-height: calc(1 / var(--RatTickling-scale-factor) * 100%);
    transform: scale(var(--RatTickling-scale-factor));
    transform-origin: 0 0;
    animation: HueRotate 30s linear infinite alternate;
  }

  @keyframes HueRotate {
    from {
      /*filter: sepia(0.1) hue-rotate(0deg) saturate(3) invert(1) sepia(0.6);*/
      filter: brightness(0.6) sepia(0.3) contrast(1.1) hue-rotate(0deg) saturate(2);
    }
    to {
      /*filter: sepia(0.1) hue-rotate(360deg) saturate(3) invert(1) sepia(0.6);*/
      filter: brightness(0.6) sepia(0.3) contrast(1.1) hue-rotate(180deg) saturate(2);
    }
  }
</style>
