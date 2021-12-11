<template>
  <article class="Score">
    <h1><slot name="title" /></h1>
    <slot />
  </article>
</template>

<style>
  .Score {
    flex: 1;
  }

  .Score > h1 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>