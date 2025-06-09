<script lang="ts">
  import { page } from "$app/stores"
  import Wrapper from "$lib/components/page-wrapper/Wrapper.svelte"
  import Card from "$lib/atoms/card/Card.svelte"

</script>

<Wrapper>
  <div class="max-w-md"> 
    <h1 class="text-2xl lg:text-3xl font-bold mb-6">my work</h1>
    <p class="mb-2">Things I've done over the years</p>

    <p class="italic text-xs"></p>
  </div>

  <div class="font-sans">
    <div class="mb-10">
      <div class="border-b-4 border-primary-light-500 dark:border-primary-dark-500 max-w-12 mb-1"></div>
      <div class="grid grid-cols-2 sm:grid-cols-3 3xl:grid-cols-5 gap-3 mt-4">
        {#each $page.data.work.items as item}
          <Card {item} techTagMap={$page.data.tech}/>
        {/each}
      </div>
    </div>
  </div>
</Wrapper>
