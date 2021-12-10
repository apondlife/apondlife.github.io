<template>
  <div class="Row">
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
  }

  .Row-bag {
    flex: 1;
    width: 960px;
  }

  .Row-gutter {
    flex: 1;
  }
</style>
