<script>
import FooterComponent from '$lib/components/footer.svelte'
import {getBlogData, API_URL} from '$lib/index.js';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();

import { onMount } from 'svelte';

let response="";

onMount(async () => {
    response = await getBlogData();
});

</script>

<svelte:head>
    <title>Blog | Articles</title>
</svelte:head>

<div class="min-h-screen container mx-auto w-[85%] mt-16">
    <h1 class="text-2xl text-center">Blog articles</h1>
    <div class="flex flex-wrap justify-center">
        {#if !response}
            <p class="mt-8">Loading...</p>
        {/if}
        {#each response as data}
            <div class="relative lg:w-[25%] md:w-[45%] sm:w-full h-[350px] mx-2 my-4 border-2 border-gray-600 rounded">
                <img class="h-[200px] w-full object-cover" src="{`${API_URL}/api/files/${data.collectionId}/${data.id}/${data.coverImg}`}" alt="coverImg">
                <div class="max-h-32 overflow-hidden text-ellipsis p-2">
                    {@html data.content}
                </div>
                <p class="absolute top-2 right-2 bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-600">{new Date(data.created).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })}</p>
                <a href="/blog/{data.id}" class="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-2 cursor-pointer hover:bg-blue-600">SEE THE FULL ARTICLE</a>
            </div>
        {/each}
    </div>
</div>

<FooterComponent></FooterComponent>