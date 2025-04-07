<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
	let { children } = $props();
</script>

<div class="py-4 bg-gray-200">
	<div class="flex justify-center items-center">
		<a href="/" class="mx-2 decoration-2 decoration-blue-500 hover:underline hover:text-blue-500 hover:cursor-pointer">
			HOME
		</a>
		<a href="/blog" class="mx-2 decoration-2 decoration-blue-500 hover:underline hover:text-blue-500 hover:cursor-pointer">
			BLOG
		</a>
		<a href="/contact" class="mx-2 decoration-2 decoration-blue-500 hover:underline hover:text-blue-500 hover:cursor-pointer">
			CONTACT
		</a>
	</div>
</div>

{@render children()}
