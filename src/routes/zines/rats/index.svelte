<script>
  import Header from "./header.svelte"
  import Row from "./row.svelte"
  import WebFrame from "./iframe.svelte"
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
    <Intro />
    <Warning>get<br>ready<br>to<br>play<br>some<br>thing</Warning>
    <Row>
      <WebFrame
        title="ratjam"
        src="https://apondlife.github.io/rats/ratjam"
        width=800
        height=500
      />
    </Row>
  </main>
</template>

<style>
  :global(body) {
    background-color: #151515;
    color: #937b7b;
  }

  :global(a) {
    color: #ff81ce;
  }

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
    opacity: 0.1;
    mix-blend-mode: color-dodge;
  }
</style>
