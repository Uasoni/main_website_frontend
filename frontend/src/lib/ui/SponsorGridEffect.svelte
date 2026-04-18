<script lang="ts">
    interface Sponsor {
        name: string;
        logo: string;
        logo_css?: string;
        text_p1: string;
        href: string;
    }

    let { sponsors } = $props<{ sponsors: Sponsor[] }>();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
    {#each sponsors as sponsor}
        {@const hasText = sponsor.text_p1.trim().length > 0}
        <div class="group relative flex flex-col h-full overflow-hidden border border-black/10 bg-[#fbfbf8] px-6 py-8 transition-colors duration-500 hover:border-[#5b8ddb]/35 focus-within:border-[#5b8ddb]/35">
            <div class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#5b8ddb]/0 transition-colors duration-500 group-hover:bg-[#5b8ddb] group-focus-within:bg-[#5b8ddb]"></div>

            {#if sponsor.href}
                <div class={`flex items-center justify-center transition-all duration-[900ms] ease-out ${hasText ? 'mb-0 min-h-[7rem] md:min-h-[8.5rem] md:group-hover:min-h-14 md:group-focus-within:min-h-14' : 'h-20 md:h-16'}`}>
                    <a
                            href={sponsor.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-full w-full items-center justify-center px-4 hover:cursor-pointer hover:scale-102 transition-transform duration-300 ease-out"
                    >
                        <img src={sponsor.logo} alt={sponsor.name} class={`h-full max-h-14 object-contain object-center transition-transform duration-500 ease-out ${sponsor.logo_css ?? ''}`} />
                    </a>
                </div>
            {:else}
                <div class={`flex items-center justify-center transition-all duration-[900ms] ease-out ${hasText ? 'mb-0 min-h-[7rem] md:min-h-[8.5rem] md:group-hover:min-h-14 md:group-focus-within:min-h-14' : 'h-20 md:h-16'}`}>
                    <div class="flex h-full w-full items-center justify-center px-4 hover:cursor-pointer hover:scale-102 transition-transform duration-300 ease-out">
                        <img src={sponsor.logo} alt={sponsor.name} class={`h-full max-h-14 object-contain object-center transition-transform duration-500 ease-out ${sponsor.logo_css ?? ''}`} />
                    </div>
                </div>
            {/if}

            {#if hasText}
                <div class="overflow-hidden transition-[max-height] duration-[900ms] ease-out md:max-h-0 md:group-hover:max-h-[32rem] md:group-focus-within:max-h-[32rem]">
                    <div class="pt-4 text-sm font-instrument-sans leading-relaxed text-black text-justify space-y-6 transition-opacity duration-300 ease-out md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                        {@html sponsor.text_p1}
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</div>
