<script>
    import BackgroundGetStarted from '$lib/assets/getstarted/BackgroundGetStarted.png'
    import PurpleForegroundGetStarted from '$lib/assets/getstarted/PurpleForegroundGetStarted.png'
</script>

<div class="relative w-full md:h-[750px] h-[800px] overflow-hidden bg-black font-sans">

    <img
            src={BackgroundGetStarted}
            alt=""
            class="absolute inset-0 h-full w-full object-cover pointer-events-none select-none z-0"
    />

    <div class="absolute bottom-0 right-0 z-10
                w-full h-[55%]
                md:top-0 md:h-full md:w-[55%]">

        <img
                src={PurpleForegroundGetStarted}
                alt=""
                class="absolute inset-0 w-full h-full object-cover
                       [clip-path:polygon(0_10%,100%_0,100%_100%,0_100%)]
                       md:[clip-path:polygon(150px_0,100%_0,100%_100%,0_100%)]"
        />

        <div class="absolute inset-0 z-30 flex flex-col justify-center items-center
                    pt-[12%] px-10 md:mr-5 mr-0 md:mb-0 mb-10
                    md:pt-0 md:px-0 md:pl-[120px]">

            <div class="flex flex-col md:max-w-[600px]">
                <h2 class="text-6xl lg:text-7xl font-bold tracking-tight pt-5 mb-6 text-white">
                    Get Started
                </h2>


                <p class="font-mono lg:text-[15px] text-[14px] leading-relaxed mb-6 text-white">
                    If you're new to all this, check out our beginner
                    guides CP101 for competitive programming, and
                    CM101 for competitive maths.
                </p>

                <div class="flex flex-wrap gap-3">
                    <a
                            href="/cp101"
                            class="bg-[#ffffff] text-black font-mono text-sm py-2 px-4 hover:bg-[#eeeeee] transition-colors w-[35%] text-center"
                    >
                        CP101
                    </a>
                    <a
                            href="/cm101"
                            class="bg-[#ffffff] text-black font-mono text-sm py-2 px-4 hover:bg-[#eeeeee] transition-colors w-[35%] text-center"
                    >
                        CM101
                    </a>
                </div>
            </div>
        </div>
    </div>

    <svg class="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-10 mix-blend-overlay" width="100%" height="100%">
        <defs>
            <pattern id="global-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" stroke-width="4" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#global-grid)" />
    </svg>

</div>