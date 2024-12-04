<script lang="ts">
	import IconLink from '$lib/components/svg/IconLink.svelte';
	import Logo from '$lib/components/svg/Logo.svelte';
	import DarkmodeButton from '$lib/components/DarkmodeButton.svelte';
</script>

<header
	class="fixed z-10 top-0 inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800"
>
	<nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
		<a href="/"> <Logo class="w-28 h-28" /> </a>
		<div class="flex space-x-1 items-center">
			<DarkmodeButton />
			<IconLink href="https://www.youtube.com" target="_blank">Youtube</IconLink>
			<IconLink href="https://www.github.com" target="_blank">Github</IconLink>
		</div>
	</nav>
</header>
