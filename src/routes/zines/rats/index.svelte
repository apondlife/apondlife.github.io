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
          class="Ratjam-frame"
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

  /* -- elements -- */
  /* -- e/frame */
  .Frame {
    padding: 30px;
    background-color: #1c1c1a;
    border: 10px solid #262626;
    border-radius: 2px;
    box-shadow: 20px 20px 40px -25px black;
  }

  .Frame > * {
    border-radius: 2px;
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
    display: flex;
    width: 960px;
    height: 600px;
  }

  .Ratjam-frame {
    flex: 1;
  }
</style>
