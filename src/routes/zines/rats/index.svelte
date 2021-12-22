<script>
  import Link from "$lib/link.svelte"
  import Header from "$lib/zines/rats/elements/Header.svelte"
  import Row from "$lib/zines/rats/elements/Row.svelte"
  import Warning from "$lib/zines/rats/elements/Warning.svelte"
  import Loader from "$lib/zines/rats/elements/Loader.svelte"
  import Placeholder from "$lib/zines/rats/elements/Placeholder.svelte"
  import Sidenote from "$lib/zines/rats/elements/Sidenote.svelte"
  import Intro from "$lib/zines/rats/content/Intro.svelte"
  import Table from "$lib/zines/rats/content/Table.svelte"
  import RatjamProcess from "$lib/zines/rats/content/RatjamProcess.svelte"
  import Poratry from "$lib/zines/rats/content/poratry/Poratry.svelte"
  import RatsInBag from "$lib/zines/rats/content/RatsInBag.svelte"
  import Cratique from "$lib/zines/rats/content/Cratique.svelte"
  import Arats from "$lib/zines/rats/content/Arats.svelte"

  // -- commands --
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
    <Header id="title" />

    <!-- intro -->
    <Row --top="-15vh">
      <div class="Tail">
        <svg class="Tail-graphic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="
            M 50 100
            C 40 80, 60 75, 50 60
            S 45 40, 50 30
            S 45 15, 50 00
            "
          />
        </svg>
      </div>
    </Row>

    <Row id="introduction" --top="40px">
      <div class="Frame--line Frame">
        <Intro />
      </div>
    </Row>

    <!-- table of contents -->
    <Row id="table-of-contents" --top="30vh">
      <Table />
    </Row>

    <!-- home button -->
    <div
      class="Home"
      alt="a rat hole with a doormat that says home. there's a tail coming out of it."
      on:click={goHome}
    />

    <!-- get ready to play some thing -->
    <Row id="warning-1" --top="30vh">
      <Warning>
        get<br />ready<br />to<br />play<br />some<br />thing
      </Warning>
    </Row>

    <!-- rat jam -->
    <Row id="ratjam" --top="30vh">
      <div class="Ratjam Frame--fancy Frame">
        <iframe class="flex-frame" title="ratjam" src="https://apondlife.github.io/rats/ratjam" />
      </div>

      <aside slot="right" class="RatjamGutter">
        <!-- hidden documentation -->
        <div class="RatjamGutter-scroll">
          <Sidenote --top="00px" text="you can click & hold for the rat to chase the cheese" />
          <Sidenote --top="30px" text="the rat loves the cheesee" />
          <Sidenote --top="80px" text="use the muscles in your head to rotate your eyes into different positions. this will allow you to look at different parts of the painting" />
          <Sidenote --top="60px" text="the rat loves painting" />
          <RatjamProcess />
        </div>
      </aside>
    </Row>

    <!-- now some poratry -->
    <Row id="warning-2" --top="30vh">
      <Warning>
        now<br />for<br />some<br />po<br />rat<br />try
      </Warning>
    </Row>

    <!--poratry-->
    <Row id="poratry" --top="30vh">
      <Poratry />

      <aside slot="right">
        <Sidenote --top="00px" text="we did some automatic writing" />
        <Sidenote --top="100px">about<br />rats</Sidenote>
        <Sidenote --top="345px" text="as well as some fluxus scores" />
        <Sidenote --top="75px">about<br />rats</Sidenote>
        <Sidenote --top="200px" text="we are serious artists" />
      </aside>
    </Row>

    <!-- on rats -->
    <Row id="rats-in-bag" --top="30vh">
      <div class="Frame--line Frame">
        <RatsInBag />
      </div>
    </Row>

    <!-- rat loving -->
    <Row id="ratloving" --top="15vh" --bot="15vh">
      <div class="RatLoving Frame--fancy Frame">
        <div class="RatLoving-frame">
          <Loader>
            <iframe
              class="RatLoving-frame flex-frame"
              slot="content"
              title="Princess is visiting the place where they harvest ideas from rat culture and make them palatable for mass market consumption"
              src="https://apondlife.github.io/rats/ratloving/Build/princess/index.html"
            />

            <Placeholder
              slot="thumb"
            />
          </Loader>
        </div>
        <div style="padding-top: 10px; font-size: 21px;">Princess is visiting the place where they harvest ideas from rat culture and make them palatable for mass market consumption</div>
      </div>

      <aside slot="right">
        <Sidenote --top="00px" text="click to start" />
        <Sidenote --top="30px" text="this is based on a true story" />
        <Sidenote --top="60px" text="you can touch the rats with your mouse" />
        <Sidenote --top="50px" text="you don't have to" />
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
        <Loader>
          <iframe
            slot="content"
            class="flex-frame"
            title="labrat"
            src="https://apondlife.github.io/rats/labrat"
          />

          <img
            slot="thumb"
            class="flex-frame"
            src="/zines/rats/games/labrat-thumb.jpg"
            alt="a screenshot of a website w/ a rat illustration and tabs numbered 001 through 005"
          />
        </Loader>
      </div>

      <aside slot="right">
        <Sidenote --top="030px" text="click to load" />
        <Sidenote --top="080px" text="this is what the internet should be like" />
        <Sidenote --top="100px" text="it's a webpage feel free to click around!" />
        <Sidenote --top="080px" text="don't forget to scroll around too" />
      </aside>
    </Row>

    <Row --top="30vh">
      <div class="Ratcapella Frame--fancy Frame">
        <iframe class="flex-frame" title="Ratcapella" src="https://apondlife.github.io/rats/ratcapella" />
      </div>

      <aside slot="right">
        <Sidenote --top="30px" text="did you know that rats can sing really well" />
        <Sidenote --top="50px" text="listen to those beautiful squeaks!" />
        <Sidenote --top="90px" text="by the way, click on the rats to make them squeak" />
      </aside>
    </Row>

    <!-- wings of rat -->
    <Row id="wings-of-rat" --top="30vh">
      <div class="WingsOfRat Frame--fancy Frame">
        <div class="WingsOfRat-frame">
          <Loader>
            <iframe
              slot="content"
              class="WingsOfRat-frame flex-frame"
              title="wings of rat"
              src="https://apondlife.github.io/rats/wings%20of%20rat/Build/rat/index.html"
            />

            <Placeholder
              slot="thumb"
            />
          </Loader>
        </div>
      </div>

      <aside slot="right">
        <Sidenote --top="00px" text="click to start" />
        <Sidenote --top="30px" text="use the WASD or arrow keys to fly around" />
        <Sidenote --top="180px" text="this game is inspired by a movie called 'wings of desire'" />
        <Sidenote --top="60px" text="the music is a track by 'wendy' called 'melody of life'" />
      </aside>
    </Row>

    <!-- rat youtube video -->
    <Row id="rat-dnb" --top="30vh">
      <div class="Frame">
        <iframe
          class="flex-frame"
          width="671"
          height="503"
          src="https://www.youtube-nocookie.com/embed/5g3lBt8y5js"
          title="rat dnb"
        />
      </div>

      <aside slot="right">
        <Sidenote --top="00px" text="we didn't make this" />
        <Sidenote --top="30px" text="youtube user lokirat made it" />
      </aside>
    </Row>

    <!-- all rats act the same -->
    <Row id="arats" --top="30vh">
      <div class="Frame--line Frame">
        <Arats />
      </div>

      <aside slot="right">
        <Sidenote --top="000px">we made a theater game (or maybe <Link href="https://nordiclarp.org/what-is-nordic-larp/" text="alarp" />)</Sidenote>
        <Sidenote --top="030px" text="all rats act the same" />
        <Sidenote --top="050px" text="you can perform it in person w/ yr friends & family" />
        <Sidenote --top="090px">this is an excerpt from its rules; for the full rules, click <Link href="https://apondlife.github.io/rats/arats/rules.pdf" text="this link" /> or the one at the bottom of the frame</Sidenote>
        <Sidenote --top="080px" text="enjoy =)" />
      </aside>
    </Row>

    <!-- rat tickling -->
    <Row id="rattickling" --top="30vh">
      <Loader>
        <div slot="content" class="RatTickling--page Frame">
          <iframe
            class="RatTickling-frame flex-frame"
            title="rat tickling"
            src="https://storage.googleapis.com/ecourses/Rat%20Tickling%20Certification/story_html5.html"
          />
        </div>

        <div slot="thumb" class="RatTickling--thumb Frame">
          <img class="RatTickling-frame" src="/zines/rats/games/rat-tickling-thumb.jpg" alt="a rat" />
        </div>
      </Loader>

      <aside slot="right">
        <Sidenote --top="000px" text="click to start this certification training" />
        <Sidenote --top="080px" text="we didn't make this" />
        <Sidenote --top="160px" text="it's produced by the purdue agriculture gaskill lab" />
        <Sidenote --top="030px" text="we applied some css filters" />
        <Sidenote --top="030px" text="rats should be happy" />
      </aside>
    </Row>

    <!-- here comes the video games -->
    <Row id="warning-3" --top="30vh">
      <Warning>
        here<br />comes<br />the<br />video<br />game<br />tfarc<br />rats<br />ii
      </Warning>
    </Row>

    <!-- tfarc rats ii -->
    <Row id="rats-ii" --top="30vh">
      <div class="RatsIi Frame--fancy Frame">
        <iframe class="flex-frame" title="Rats-II" src="https://apondlife.github.io/rats/rats-ii" />
      </div>

      <aside slot="right">
        <Sidenote --top="00px" text="you can right click & hold to create new rats" />
        <Sidenote --top="30px" text="a lot of new rats" />
        <Sidenote --top="50px" text="the yellow box also selects them" />
        <Sidenote --top="90px" text="left click drops a cheese, you remember the cheese" />
        <Sidenote --top="120px" text="the selected rats all act the same." />
      </aside>
    </Row>

    <!-- drawing rats -->
    <Row --top="30vh">
      <div class="Sketching">
        <div class="Portrat Frame--fancy Frame">
          <Loader>
            <div
              slot="content"
              class="Portrat-view"
            >
              <iframe
                class="Portrat-game"
                title="portrat"
                src="https://apondlife.github.io/rats/portrat"
              />
            </div>

            <img
              slot="thumb"
              class="Portrat-thumb Portrat-view"
              src="/zines/rats/games/portrat-thumb.jpg"
              alt="hand of rat facing right"
            />
          </Loader>
        </div>

        <div class="Ratist Frame--fancy Frame">
          <div class="Ratist-view">
            <iframe
              class="Ratist-game"
              title="ratist"
              src="https://apondlife.github.io/rats/ratle"
            />
          </div>
        </div>
      </div>

      <aside slot="right">
        <Sidenote --top="000px" text="click to run these drawing tools" />
        <Sidenote --top="080px" text="then click and drag to draw rats" />
        <Sidenote --top="020px" text="or draw with rats" />
        <Sidenote --top="100px" text="follow the form of the rat, or describe your own" />
      </aside>
    </Row>

    <!-- on rats -->
    <Row id="cratique" --top="30vh">
      <div class="Frame--line Frame">
        <Cratique />
      </div>
    </Row>
  </main>
</template>

<style>
  /* -- resets -- */
  :global(iframe) {
    border: none;
  }

  :global(*) {
    box-sizing: border-box;
    overscroll-behavior: none;
  }

  /* -- globals -- */
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

  :global(a, a[target]) {
    color: #ff81ce;
    text-decoration: none;
  }

  :global(a:hover) {
    text-decoration: underline;
  }

  :global(strong) {
    font-weight: 600;
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

  /* -- e/home */
  .Home {
    position: sticky;
    width: 100px;
    height: 146px; /* w * 1.46 */
    margin-top: -130px;
    top: 20px;
    left: 25px;
    background-image: url("/zines/rats/homepage1.png");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height="40" width="40"><text x="0" y="9" font-size="30" dominant-baseline="hanging">🐀</text></svg>'), auto;
  }

  .Home:hover {
    background-image: url("/zines/rats/homepage2.png");
  }

  /* preload the hover image so there's no flicker */
  /* https://stackoverflow.com/questions/1373142/preloading-css-images */
  .Home::after {
    content: url("/zines/rats/homepage2.png");
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
  }

  /* -- e/tail */
  .Tail {
    display: flex;
    width: 960px;
    justify-content: center;
  }

  .Tail-graphic {
    width: 480px;
    overflow: visible;
  }

  .Tail path {
    stroke: #ff81ce;
    fill: transparent;
    stroke-width: 1px;
    stroke-linecap: butt;
    stroke-dasharray: 10 5;
  }

  /* -- arts -- */
  .Ratjam {
    width: 960px;
    height: 600px;
  }

  .RatjamGutter {
    overflow: hidden;
  }

  .RatjamGutter-scroll {
    height: 600px;
    width: 120%;
    overflow: auto;
  }

  .Labrat {
    width: 960px;
    height: 600px;
  }

  .Ratcapella {
    width: 900px;
    height: 600px;
  }

  .RatsIi {
    overflow: hidden;
    width: 600px;
    height: 600px;
  }

  .Sketching {
    display: flex;
    align-items: center;
    gap: 30px;
    overflow: hidden;
  }

  .Ratist-view {
    width: 368px;
    height: 466px;
  }

  .Ratist-game {
    width: 728px;
    height: 922px;
    transform: scale(0.505);
    transform-origin: top left;
  }

  .Portrat-view {
    width: 368px;
    height: 230px;
  }

  .Portrat-thumb {
    display: flex;
    flex-direction: column;
    justify-content: center;
    mix-blend-mode: hard-light;
    opacity: 0.15;
  }

  .Portrat-game {
    width: 920px;
    height: 575px;
    transform: scale(0.4);
    transform-origin: top left;
    filter: invert(93%);
  }

  /* content is 16:9 */
  .WingsOfRat-frame {
    width: 880px;
    height: 495px;
  }

  .RatLoving {
    flex-direction: column;
  }

  .RatLoving-frame {
    width: 512px;
    height: 518px;
  }

  .RatTickling--page {
    /* rat-tickling has a fixed internal content size: 980 x 658 */
    width: 980px;
    height: 658px;
    transform: scale(0.95918);
    transform-origin: top;
    margin-bottom: -26px;
  }

  .RatTickling--thumb {
    height: 631px;
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

  .RatTickling--page .RatTickling-frame {
    --scale: 0.94;
    min-width: calc(1 / var(--scale) * 100%);
    min-height: calc(1 / var(--scale) * 100%);
    transform: scale(var(--scale));
    transform-origin: 0 0;
  }

  @keyframes HueRotate {
    from {
      filter: brightness(0.6) sepia(0.3) contrast(1.1) hue-rotate(0deg) saturate(2);
    }
    to {
      filter: brightness(0.6) sepia(0.3) contrast(1.1) hue-rotate(180deg) saturate(2);
    }
  }
</style>
