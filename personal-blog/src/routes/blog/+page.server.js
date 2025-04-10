import { getBlogData } from '$lib/index.js';

export async function load() {
    const response = await getBlogData();
    return {
        response
    };
}
