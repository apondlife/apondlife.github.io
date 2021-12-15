<script>
  // the post name
  export let name = ""

  // the post metadata, e.g. { "author": "me" }
  export let meta = $$restProps
</script>

<svelte:head>
  <title>{name}</title>

  {#each Object.entries(meta) as [name, val]}
    <meta name="{name}" content="{val}" />
  {/each}
</svelte:head>

<section class="PostBody">
  <slot />
</section>