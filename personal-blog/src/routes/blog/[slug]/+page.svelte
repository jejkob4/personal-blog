<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    import { getBlogDataById, API_URL } from '$lib/index.js';
    import FooterComponent from '$lib/components/footer.svelte'

    let response = null;

    onMount(async ()=> {
        if ($page.params.slug){
            response = await getBlogDataById($page.params.slug);
            console.log(response);
        }
    });
    
</script>


{#if response}
    <div class="container mx-auto w-[85%] mt-16 min-h-screen">
        <p class="text-center text-gray-500 mt-2">{new Date(response.created).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })}</p>
        <img class="w-full h-[400px] object-cover mt-6" src="{`${API_URL}/api/files/${response.collectionId}/${response.id}/${response.coverImg}`}" alt="coverImg">
        <div class="mt-6 text-lg">
            {@html response.content}
        </div>
    </div>
{:else}
    <div class="container mx-auto w-[85%] mt-16 text-center">
        <p>Loading article...</p>
        <a href="/blog" class="text-blue-500 font-semibold hover:underline mt-6 inline-block">Go back to the blog</a>
    </div>
{/if}


<FooterComponent></FooterComponent>