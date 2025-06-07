<script lang="ts">
  import { page } from '$app/stores';
  import Wrapper from "$lib/components/page-wrapper/Wrapper.svelte"

  const on_deck: Section = {
    title: "on deck",
    data: $page.data.lineup.items
    .filter((item: Item) => 
      item.type === 'future'
    ) 
  }
  const at_bat: Section = {
    title: "at bat",
    data: $page.data.lineup.items
    .filter((item: Item) => 
      item.type === 'current'
    ) 
  }  
</script>

<Wrapper>
  <div class="max-w-md"> 
    <h1 class="text-2xl lg:text-3xl font-bold mb-6">the lineup</h1>
    <p class="mb-2">
      some stuff that I've been cooking. 
      wait! no! the baseball metaphor! we're using the baseball metaphor!!
    </p>
    <p class="italic text-xs">at bat = currently doing. on deck = for the future</p>
  </div>
  
  <div class="font-sans">
    {#each [at_bat, on_deck] as section}
      <div class="mb-10">
        <div class="border-b-4 border-primary-light-500 dark:border-primary-dark-500 max-w-12 mb-1"></div>
        <h5>{ section.title }</h5>
        {#each section.data as item}
          <div class="mt-2">
            <p class="font-bold">
              {item.title} 
              {#if item.link_on} 
                <a 
                  class="font-light italic text-sm text-primary-light-950 dark:text-primary-dark-600"
                  href={item.link}
                >{item.link}</a> 
              {/if}
            </p>
            {#if item.detail_on}
              <p class="text-sm pl-4 max-w-96">{item.detail}</p>
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</Wrapper>
