<script>
  import Award from "$lib/icons/Award.svelte"
  import Tag from "$lib/atoms/tag/Tag.svelte"

  const { item, techTagMap } = $props()
</script>

<a 
  class="flex flex-col justify-between gap-3 relative overflow-hidden 
  border-3 border-primary-light-100 dark:border-primary-dark-100 
  {item.award ? 'bg-gray-300 dark:bg-gray-700' : ''} h-80 xl:h-[500px]
  opacity-90 hover:opacity-100 z-20"
  href={item.link}
>
  <div class="flex-grow flex-shrink-0 sm:max-h-40 md:max-h-48 xl:max-h-96">
    <div
      class="h-full bg-cover bg-center bg-gray-50 dark:bg-gray-950"
      style="background-image: url('https://pocketbase.fsorodrigues.dev/api/files/fqgnykni196i3b7/{item.id}/{item.image}')"
    ></div>
  </div>
  <p class="font-bold px-3">
    {item.title} 
  </p>
  {#if item.award === true}
    <div class="absolute -top-12 -right-12 xl:-top-16 xl:-right-16 w-24 h-24 xl:w-32 xl:h-32 rotate-45 bg-primary-light-100 dark:bg-primary-dark-50"></div>
    <div class="absolute top-2 right-1 xl:top-2 xl:right-2 w-6 h-6 xl:w-8 xl:h-8">
      <Award />
    </div>
  {/if}
  <div class="flex flex-wrap gap-2 min-h-6 p-3">
    {#each item.tech as tag}
      <Tag name={techTagMap.get(tag)} />
    {/each}
  </div>
</a>
