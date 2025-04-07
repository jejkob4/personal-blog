<script>
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="min-w-screen py-4 sticky bg-gray-100">
	<div class="flex justify-center items-center">
		<a href="/" class="mx-2 decoration-2 decoration-red-300 hover:underline hover:cursor-pointer">
			HOME
		</a>
		<a href="/blog" class="mx-2 decoration-2 decoration-red-300 hover:underline hover:cursor-pointer">
			BLOG
		</a>
		<a href="/contact" class="mx-2 decoration-2 decoration-red-300 hover:underline hover:cursor-pointer">
			CONTACT
		</a>
	</div>
</div>

{@render children()}
