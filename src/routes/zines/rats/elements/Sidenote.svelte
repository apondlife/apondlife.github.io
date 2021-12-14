<script>
  // the sidenote text, if any
  export let text = ""
</script>

<template>
  <div class="Sidenote">
    {#if text !== ""}
      {text}
    {:else}
      <slot />
    {/if}
  </div>
</template>

<style>
  .Sidenote {
    box-sizing: content-box;
    position: relative;
    width: 100px;
    margin-top: var(--top);
    margin-left: 30px;
    padding-left: 20px;
    border-left: 1px dashed var(--fg-color-dark);
  }
</style>
