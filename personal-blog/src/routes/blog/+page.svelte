<script>
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
let response="";

async function getBlogData() {
    response = await pb.collection('posts').getFullList({
        sort: '+created',
    });
    console.log(response);
}
getBlogData();
</script>

<div class="container mx-auto w-[85%]">
    <p>blog ty kokot</p>
</div>