<template>
  <article class="Score">
    <h1><slot name="title" /></h1>
    <slot />
  </article>
</template>

<style>
  .Score {
    font-family: "Courier New", Courier, monospace;
    flex: 1;
  }

  .Score > h1 {
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
</style>
