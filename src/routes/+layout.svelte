<script lang="ts">
	import './layout.css';
	import CPMSoc_Logo from '$lib/assets/CPMSoc_Logo.png';

	let { children } = $props();
</script>

<svelte:head>
    <title>UNSW CPMSoc</title>
    <link rel="icon" href={CPMSoc_Logo} />
</svelte:head>
{@render children()}
