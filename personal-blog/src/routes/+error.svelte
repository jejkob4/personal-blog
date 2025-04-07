<script>
    import { page } from '$app/state';
</script>

<svelte:head>
    <title>Blog | ERR0R</title>
</svelte:head>

<div class="text-center mt-12">
    <h1 class="text-2xl">Error {page.status}</h1>
    <p class="mt-4 text-lg">{page.error.message}</p>
    <a href="/" class="text-blue-500 font-semibold hover:underline mt-6 inline-block">Go back to the homepage</a>
</div>
