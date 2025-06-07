<script>
  import Award from "$lib/icons/Award.svelte"
  import Tag from "$lib/atoms/tag/Tag.svelte"

  const { item, techTagMap } = $props()
</script>

<a 
  class="flex flex-col justify-between gap-3 relative overflow-hidden 
  border-3 border-primary-light-100 dark:border-primary-dark-100 
  {item.award ? 'bg-gray-300 dark:bg-gray-600' : ''} h-80
  opacity-90 hover:opacity-100 z-20"
  href={item.link}
>
  <div class="flex-grow flex-shrink-0  sm:max-h-40 md:max-h-48">
    <div
      class="h-full bg-cover "
      style="background-image: url('https://pocketbase.fsorodrigues.dev/api/files/fqgnykni196i3b7/{item.id}/{item.image}')"
    ></div>
  </div>
  <p class="font-bold px-3">
    {item.title} 
  </p>
  {#if item.award === true}
    <div class="absolute -top-12 -right-12 w-24 h-24 rotate-45 bg-primary-light-100 dark:bg-primary-dark-50"></div>
    <div class="absolute top-0 right-0 w-10 h-10">
      <Award />
    </div>
  {/if}
  <div class="flex flex-wrap gap-2 min-h-6 p-3">
    {#each item.tech as tag}
      <Tag name={techTagMap.get(tag)} />
    {/each}
  </div>
</a>
