<script>
  import Frame from "./frame.svelte"

  // the iframe title
  let title = ""
</script>

<template>
  <Frame>
    <iframe class="Frame" title={title} {...$$restProps} />
  </Frame>
</template>

<style>
  .Frame {
    border: none;
    outline: none;
  }
</style>
