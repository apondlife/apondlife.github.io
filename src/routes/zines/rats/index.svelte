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
      <div class="Ratjam RatsFrame">
        <iframe
          class="Ratjam-frame"
          title="ratjam"
          src="https://apondlife.github.io/rats/ratjam"
        />
      </div>
    </Row>
  </main>
</template>

<style>
  /* -- globals -- */
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    background-color: #151515;
    color: #937b7b;
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
  .Ratjam {
    display: flex;
    width: 1000px;
    height: 625px;
  }

  .Ratjam-frame {
    flex: 1;
  }

  /* -- utils -- */
  .RatsFrame {
    padding: 30px;
    background-color: #1c1c1a;
    border: 10px solid #262626;
    border-radius: 2px;
    box-shadow: 20px 20px 40px -25px black;
  }

  .RatsFrame > * {
    border-radius: 2px;
  }
</style>
