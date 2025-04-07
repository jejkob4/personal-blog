// place files you want to import through the `$lib` alias in this folder.
import PocketBase from 'pocketbase';

export const API_URL = 'http://127.0.0.1:8090';

const pb = new PocketBase(API_URL);

export async function getBlogData() {
    try {
        const response = await pb.collection('posts').getFullList({
            sort: '-created',
        });
        return response;
    } catch (error){
        console.error("Error fetching blog data: ", error);
    }
}

export async function getBlogDataById(id) {
    try {
        const response = await pb.collection('posts').getFirstListItem(`id="${id}"`);
        return response;
    } catch (error) {
        console.error(`Error fetching blog data for slug "${id}":`, error);
    }
}
