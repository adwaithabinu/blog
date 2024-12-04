<script lang="ts">
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
	import '../app.css';
    import Header from '$lib/components/MainHeader.svelte';
    
</script>

<ThemeInitializer>
 <Header/>   
<main class="pt-24 max-w-5xl mx-auto">
	<slot />
</main>
</ThemeInitializer>
