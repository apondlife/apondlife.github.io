<script>
  // -- props --
  // if the content is playing
  let state = "thumb"

  // -- events --
  // when the loader is clicked
  function onStartLoad() {
    state = "load"
  }
</script>

<template>
  {#if state === "thumb"}
    <span class="Loader" on:click={onStartLoad}>
      <slot name="thumb" />
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
