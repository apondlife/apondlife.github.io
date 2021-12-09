<script>
  import Row from "./row.svelte"
</script>

<template>
  <Row>
    <p class="RatsWarning">
      <slot />
    </p>
  </Row>
</template>

<style>
  .RatsWarning {
    margin-top: 30vh;
    margin-bottom: 30vh;
    font-size: 10em;
    text-align: center;
  }
</style>
