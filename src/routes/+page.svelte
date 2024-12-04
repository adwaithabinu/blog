<script lang="ts">
    
</script>

<section class="bg-gray-100 dark:bg-gray-900 py-10">
    <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <h1 class="text-5xl font-bold text-gray-800 dark:text-gray-100 text-center mb-10">
            Blog Posts
        </h1>

        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {#each posts as { metadata }, index}
                <article 
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                    <img 
                        src={metadata.imgURL} 
                        alt={metadata.alt || metadata.title} 
                        class="w-full h-48 object-cover"
                    />
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 truncate">
                            {metadata.title}
                        </h2>
                        <p class="text-gray-600 dark:text-gray-400 mt-4 line-clamp-3">
                            {metadata.summary}
                        </p>
                        <a 
                            href={`/blogs/posts/${index}`} 
                            class="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                        >
                            Read more →
                        </a>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>
