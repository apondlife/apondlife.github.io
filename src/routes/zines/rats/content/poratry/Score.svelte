<template>
  <article class="Score">
    <h1><slot name="title" /></h1>
    <slot />
  </article>
</template>

<style>
  .Score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    font-family: "Courier New", Courier, monospace;
  }

  .Score > h1 {
    display: block;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
</style>
