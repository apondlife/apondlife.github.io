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
  <main class="Rats">
    <Header />
    <Intro />
    <Warning>get<br>ready<br>to<br>play<br>some<br>thing</Warning>
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
    display: flex;
    flex-direction: column;
  }
</style>
