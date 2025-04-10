import { getBlogDataById } from '$lib/index.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const response = await getBlogDataById(params.slug);

    return {
        response
    };
}
