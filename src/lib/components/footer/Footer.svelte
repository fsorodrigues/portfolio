<script lang='ts'>
  import { fade } from 'svelte/transition';
  import Info from "$lib/icons/Info.svelte";

  let showInfo : boolean = $state(false);

  function toggleState() {
    showInfo = !showInfo;
  }
</script>

<footer class='fixed bottom-0 left-0 right-0 h-8'>
  <div class='flex items-center justify-end h-full py-2 px-3'>
    {#if showInfo}
      <span class="text-xs mr-1" in:fade={{duration:200}}>
        Icons by github.com/feathericons/feather
      </span>
    {/if}
    <div 
      class="wrapper relative h-full aspect-square" 
      role="tooltip"
      on:mouseenter={toggleState}
      on:mouseleave={toggleState}
    >
      <Info />
    </div>
  </div>
</footer>
