<script>
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="py-4 bg-gray-200">
	<div class="flex justify-center items-center">
		<a href="/" class="mx-2 decoration-2 decoration-blue-500 hover:underline hover:cursor-pointer">
			HOME
		</a>
		<a href="/blog" class="mx-2 decoration-2 decoration-blue-500 hover:underline hover:cursor-pointer">
			BLOG
		</a>
		<a href="/contact" class="mx-2 decoration-2 decoration-blue-500 hover:underline hover:cursor-pointer">
			CONTACT
		</a>
	</div>
</div>

{@render children()}
