<script>
  // the id of the row
  export let id = ""
</script>

<template>
  <div id={id} class="Row">
    <div class="Row-gutter">
      <slot name="left" />
    </div>

    <div class="Row-bag">
      <slot />
    </div>

    <div class="Row-gutter">
      <slot name="right" />
    </div>
  </div>
</template>

<style>
  .Row {
    display: flex;
    overflow: hidden;
    margin-top: var(--top);
    margin-bottom: var(--bot);
  }

  .Row-bag {
    flex: 1;
    width: 960px;
  }

  .Row-gutter {
    flex: 1;
  }
</style>
