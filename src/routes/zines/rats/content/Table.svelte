<script>
  import Link from "$lib/link.svelte"
</script>

<template>
  <nav class="Table">
    <ol class="Table-list" start=0>
      <li><Link href="#title">title</Link></li>
      <li><Link href="#introduction">introduction</Link></li>
      <li><Link href="#toc">table of contents</Link></li>
      <li><Link href="#warning-1">warning 1</Link></li>
      <li><Link href="#ratjam">ratjam</Link></li>
      <li><Link href="#warning-2">warning 2</Link></li>
      <li><Link href="#poratry">poratry</Link></li>
      <li><Link href="#rats-in-bag">rats in bag</Link></li>
      <li><Link href="#ratloving">princess is visiting the place where they harvest ideas from rat culture and make them palatable for mass market consumption</Link></li>
      <li><Link href="#wings-of-rat">wings of rat</Link></li>
      <li><Link href="#rat-dnb">rat spins to dnb</Link></li>
      <li><Link href="#arats">all rats act the same</Link></li>
      <li><Link href="#rattickling">rattickling</Link></li>
      <li><Link href="#warning-3">warning 3</Link></li>
      <li><Link href="#rats-ii">tfarc rats ii</Link></li>
      <li><Link href="#cratique">cratique</Link></li>
    <ol>
  </nav>
</template>

<style>
  .Table {
    display: flex;
    justify-content: center;
    width: 960px;
    font-size: 1.3em;
  }

  .Table-list {
    display: inline-flex;
    flex-direction: column;
    list-style: decimal-leading-zero;
  }

  .Table-list li {
    max-width: 100px;
    white-space: nowrap;
  }
</style>
