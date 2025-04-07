<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    import { getBlogDataById, API_URL } from '$lib/index.js';
    import FooterComponent from '$lib/components/footer.svelte'

    let response;

    onMount(async ()=> {
        if ($page.params.slug){
            response = await getBlogDataById($page.params.slug);
        }
    });
    
</script>


{#if response}
    <div class="container mx-auto w-[85%] mt-16 min-h-screen">
        <p class="text-center text-gray-500 mt-2">{new Date(response.created).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })}</p>
        <img class="w-full h-[25rem] object-cover mt-6" src="{API_URL}/api/files/{response.collectionId}/{response.id}/{response.coverImg}" alt="coverImg">
        <div class="mt-6 text-xl leading-relaxed text-gray-800">
            {@html response.content}
        </div>
        <div class="flex justify-between items-center mt-8">
            <a class="text-blue-500 hover:underline font-semibold" href="/blog">Go back..</a>
            <div class="text-right">
                Author of this article:
                <br>
                <a class="text-blue-500 hover:underline font-semibold" href="mailto:{response.author}">{response.author}</a> 
            </div>
        </div>
    </div>
    <FooterComponent></FooterComponent>
{:else}
    <div class="container mx-auto w-[85%] mt-16 text-center">
        <p>Loading article...</p>
    </div>
{/if}

