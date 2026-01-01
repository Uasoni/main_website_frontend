<script>
    import Hero_Background from '$lib/assets/hero/Hero_Background.png'
</script>

<div class="relative flex w-full h-[120vh] max-h-[650px] items-center overflow-hidden text-white justify-center">

    <img
            src={Hero_Background}
            alt=""
            class="absolute inset-0 h-full w-full object-fill pointer-events-none select-none"
    />

    <!-- If you really really want a slight black tint you can uncomment this -->
     <div class="absolute inset-0 pointer-events-none bg-black/15"></div>

    <div class="relative z-10 w-[95%] flex md:flex-row flex-col p-4 gap-10">
        <div class="flex-2 relative z-10 px-12 max-w-4xl bg-green-500/20">
            <p>Image goes here</p>
        </div>

        <div class="flex-3 relative z-10 p-12 max-w-4xl bg-red-500/20">
            <h1 class="text-6xl font-bold mb-2">UNSW CPMSoc</h1>
            <p class="mb-4">Welcome to the CPMSoc website some text goes here</p>
        </div>
    </div>
</div>