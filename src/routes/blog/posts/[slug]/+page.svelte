<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    const { metadata, post: Post } = data;
</script>

<article class=" dark:bg-gray-900 text-gray-800 dark:text-gray-200  overflow-hidden">
    <header class="p-6">
        <div class="w-full mx-auto">
            <img 
                src={metadata.imgURL} 
                alt={metadata.alt} 
                class="w-full h-64 object-cover rounded-xl shadow-md" 
            />
            <h1 class="mt-6 text-4xl font-bold leading-tight text-center sm:text-left">
                {metadata.title}
            </h1>
        </div>
    </header>

    <div class="prose dark:prose-invert px-6 py-4 sm:px-8 sm:py-6 max-w-none leading-relaxed">
        <Post />
    </div>
</article>
