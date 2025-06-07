<script lang="ts">
  import { page } from '$app/stores';
  import type { Item, Section } from '$lib/components/types/types';


  const databases: Section = {
    title: "databases",
    data: $page.data.tags.items
    .filter((item: Item) => 
      item.tag_category === 'data'
    ) 
  }
  const langs: Section = {
    title: "apps and visualization",
    data: $page.data.tags.items
    .filter((item: Item) => 
      item.tag_category === 'programming language'
    ) 
  }  
</script>

<div class="my-6">
  Here's some of my favourite technologies to build with
  <div class="font-sans">
  {#each [langs, databases] as section}
    <div class="mt-6">
      <div class="border-b-4 border-primary-light-500 dark:border-primary-dark-500 max-w-12 mb-1"></div>
      <h3 class="text-sm mb-1">{section.title}</h3>
      <div class="flex">
        {#each section.data as item}
          <div class="mr-4 stack-item">
            <img 
              class="w-9"
              src="https://pocketbase.fsorodrigues.dev/api/files/{item.collectionId}/{item.id}/{item.icon}" 
              alt="{item.tag_name} logo ({item.tag_category} {item.tag_type})"
            />
          </div>
        {/each}
      </div>
    </div>
  {/each}
  </div>
</div>
