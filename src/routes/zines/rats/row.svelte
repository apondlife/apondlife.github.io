<template>
  <div class="RatsRow">
    <div class="RatsRow-gutter">
      <slot name="left" />
    </div>

    <div class="RatsRow-bag">
      <slot />
    </div>

    <div class="RatsRow-gutter">
      <slot name="right" />
    </div>
  </div>
</template>

<style>
  .RatsRow {
    display: flex;
  }

  .RatsRow-bag {
    flex: 1;
    max-width: 1000px;
  }

  .RatsRow-gutter {
    flex: 1;
  }
</style>
