<script>
  import Link from "$lib/link.svelte"
</script>

<template>
  <nav class="Table">
    <ol class="Table-list">
      <li>00. <Link href="#title">title</Link></li>
      <li>01. <Link href="#introduction">introduction</Link></li>
      <li>02. <Link href="#toc">table of contents</Link></li>
      <li>03. <Link href="#warning-1">warning 1</Link></li>
      <li>04. <Link href="#ratjam">ratjam</Link></li>
      <li>05. <Link href="#warning-2">warning 2</Link></li>
      <li>06. <Link href="#poratry">poratry</Link></li>
      <li>07. <Link href="#on-rats">on rats</Link></li>
      <li>08. <Link href="#ratloving">ratloving</Link></li>
      <li>09. <Link href="#wings-of-rat">wings of rat</Link></li>
      <li>10. <Link href="#rat-dnb">rat spins to dnb</Link></li>
      <li>11. <Link href="#rattickling">rattickling</Link></li>
      <li>12. <Link href="#warning-3">warning 3</Link></li>
      <li>13. <Link href="#rats-ii">tfarc rats ii</Link></li>
      <li>14. <Link href="#cratique">cratique</Link></li>
    <ol>
  </nav>
</template>

<style>
  .Table {
    display: flex;
    justify-content: center;
    font-size: 1.3em;
  }

  .Table-list {
    display: inline-flex;
    flex-direction: column;
  }
</style>
