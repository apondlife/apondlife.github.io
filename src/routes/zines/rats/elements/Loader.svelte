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
    <div class="Loader" on:click={onPlay}>
      <slot name="loader" />
    </div>
  {:else}
    <slot name="content" />
  {/if}
</template>

<style>
  .Loader {
    cursor: pointer;
  }
</style>
