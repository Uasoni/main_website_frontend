<script lang="ts">
    import Hero_Background from '$lib/assets/hero/Hero_Background.png'
    import Chip from '$lib/assets/hero/Chip.png'
    import Chip_Inverted from '$lib/assets/hero/Chip_Inverted.png'
    import Queen_Card from '$lib/assets/hero/Queen_Card.png'
    import Coin from '$lib/assets/hero/Coin.png'

    let tiltX = $state(0);
    let tiltY = $state(0);

    const handleMouseMove = (e: MouseEvent) => {
        if (e == null || !e.currentTarget) { return }

        const target = e.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        tiltX = -y / 80;
        tiltY = x / 80;
    }

    const handleMouseLeave = () => {
        tiltX = 0;
        tiltY = 0;
    }
</script>

<div class="relative flex w-full md:h-[85vh] h-[90vh] items-center overflow-hidden text-white justify-center">

    <img
            src={Hero_Background}
            alt=""
            class="absolute inset-0 h-full w-full object-fill pointer-events-none select-none"
    />

    <!-- If you really really want a slight black tint you can uncomment this -->
     <div class="absolute inset-0 pointer-events-none bg-black/15"></div>

    <div class="relative z-10 w-[95%] flex md:flex-row flex-col p-0 gap-10">
<!--        This is the card effect -->
        <div class="xl:flex-4 lg:flex-4 md:flex-6 flex-4 flex justify-center items-center">
            <div
                    class="relative md:w-[80%] w-[40%] perspective-[1000px] group max-w-[425px]"
                    role="presentation"
                    onmousemove={handleMouseMove}
                    onmouseleave={handleMouseLeave}
            >
                <div
                        class="relative w-full h-full transition-transform duration-250 ease-out will-change-transform"
                        style="transform: rotate(-15deg) rotateX({tiltX}deg) rotateY({tiltY}deg)"
                >
                    <img
                            src={Chip_Inverted}
                            alt="Blue chip inverted bottom parallax effect"
                            class="absolute z-10 top-0 left-0 w-full h-auto translate-x-2 translate-y-2 brightness-110"
                    />
                    <img
                            src={Queen_Card}
                            alt="Queen playing card"
                            class="absolute z-20 -bottom-8 xl:-left-18 lg:-left-16 md:-left-14 -left-8 w-[35%] h-auto object-contain rotate-[-10deg]"
                            style="transform: translateX({-tiltY * 0.5}px) translateY({-tiltX * 0.5}px)"
                    />

                    <svg
                            class="absolute z-15 -bottom-[283px] -right-[275px] w-[100%] h-auto pointer-events-none opacity-80"
                            viewBox="0 -50 500 800"
                            style="transform: rotate(5deg) translateX({-tiltY * 0.6}px) translateY({-tiltX * 0.6}px)"
                    >
                        <defs>
                            <linearGradient id="trailFade" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="40%" stop-color="#ffffff" stop-opacity="1" />
                                <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                            </linearGradient>
                        </defs>

                        <path
                                id="customCurve"
                                fill="none"
                                d="M1.994,150.591 C10.979,-15.143 170.216,-14.039 217.926,20.550 C253.429,46.289 300.280,116.014 197.722,222.556 C163.996,257.591 119.223,280.066 96.701,343.760 C74.233,407.299 10.150,636.256 646.002,719.996"
                        />

                        <text font-family="monospace" font-weight="bold" font-size="15" fill="url(#trailFade)" letter-spacing="1">
                            <textPath href="#customCurve" startOffset="5%">
                                101110101010101010101010111010101000101010101010010100001010010101010101010101010101010010101010101010101010101001010100101010101010101011010101010101010
                            </textPath>
                        </text>
                    </svg>

                    <img
                            src={Coin}
                            alt="Queen playing card"
                            class="absolute z-20 xl:-top-23 md:left-10 md:-top-20 sm:-top-18 left-5 -top-12 w-[40%] h-auto object-contain rotate-[-10deg]"
                            style="transform: translateX({-tiltY * 0.5}px) translateY({-tiltX * 0.5}px)"
                    />
                    <img
                            src={Chip}
                            alt="Blue chip top no parallax effect"
                            class="relative z-30 w-full h-auto brightness-115"
                            style="transform: translateX({-tiltY * 1.5}px) translateY({-tiltX * 1.5}px)"
                    />
                </div>
            </div>
        </div>

<!--        This is the text -->
        <div class="flex-5 relative flex justify-center items-center z-10 p-8">
            <div>
                <p class="mb-4 font-mono md:w-[85%]">
                    #include &lt;math.h&gt;
                </p>
                <h1 class="lg:text-8xl sm:text-6xl text-5xl font-[600] mb-4">UNSW CPMSoc</h1>
                <p class="mb-4 font-mono text-xs md:w-[80%] w-[100%]">
                    Hi! We're the UNSW Competitive Programming and Mathematics Society,
                    a student society run by and for people who love problem solving.

                    <br/><br/>

                    We run regular workshops and competitions, as well as social and
                    professional events. Everyone is welcome, regardless of prior
                    experience!
                </p>
            </div>
        </div>
    </div>
</div>