<script lang="ts">
  // import stores
  import mode from '$lib/stores/Mode'

  // import components
  import Dark from "$lib/icons/Dark.svelte";
  import Light from "$lib/icons/Light.svelte";

  function toggle() {
    mode.update((m) => m === 'light' ? 'dark' : 'light')
  }
  
  let checked : boolean = $derived($mode === 'light')
</script>
<div class="wrapper relative w-8 h-8">
  <input 
    type="checkbox" 
    role="switch" 
    class="appearance-none h-full w-full" 
    {checked}
    on:click={toggle}
  />
  
  {#if $mode === 'light'}
    <Dark />
    {:else}
      <Light />
  {/if}
</div>

<!-- <style lang="postcss"> -->
<!--   .wrapper { -->
<!--     background: pink; -->
<!--   } -->
<!---->
<!--   .wrapper:has(> input:checked) { -->
<!--     background: peachpuff; -->
<!--   } -->
<!-- </style> -->
