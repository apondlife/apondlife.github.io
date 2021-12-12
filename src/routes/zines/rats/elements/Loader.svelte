<script>
  // -- props --
  // if the content is playing
  let isPlaying = false

  // -- events --
  // when the loader is clicked
  function onPlay(evt) {
    isPlaying = true
  }
</script>

<template>
  {#if !isPlaying}
    <span class="Loader" on:click={onPlay}>
      <slot name="loader" />
    </span>
  {:else}
    <slot name="content" />
  {/if}
</template>

<style>
  .Loader {
    cursor: pointer;
    display: contents;
  }
</style>
