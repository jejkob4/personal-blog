<script>
    import FooterComponent from '$lib/components/footer.svelte';
    import { API_URL } from '$lib/index.js';

    export let data;
    let response = data.response;
</script>

{#if response}
    <div class="container mx-auto w-[85%] mt-16 min-h-screen">
        <p class="text-center text-gray-500 mt-2">
            {new Date(response.created).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })}
        </p>
        <img class="w-full h-[25rem] object-cover mt-6"
            src="{API_URL}/api/files/{response.collectionId}/{response.id}/{response.coverImg}"
            alt="coverImg"
        >
        <div class="mt-6 text-xl leading-relaxed text-gray-800">
            {@html response.content}
        </div>
        <div class="flex justify-between items-center mt-8">
            <a class="text-blue-500 hover:underline font-semibold" href="/blog">Go back..</a>
            <div class="text-right">
                Author of this article:
                <br>
                <a class="text-blue-500 hover:underline font-semibold" href="mailto:{response.author}">
                    {response.author}
                </a> 
            </div>
        </div>
    </div>
    <FooterComponent />
{:else}
    <div class="container mx-auto w-[85%] mt-16 text-center">
        <p>Loading article...</p>
    </div>
{/if}
