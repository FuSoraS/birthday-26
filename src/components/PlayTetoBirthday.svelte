<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "@src/config.ts";

    export let targetSelector = ".kasane-teto-media";

    let audioRef;
    let mediaEl;

    const audioSrc = `${BASE_URL}/audios/happy-birthday-teto.opus`;
    const audioVolume = 0.5;

    $: if (audioRef) {
        audioRef.src = audioSrc;
        audioRef.volume = audioVolume;
    }

    onMount(() => {
        mediaEl = document.querySelector(targetSelector);
    });

    function handleClick() {
        audioRef?.play();
        mediaEl?.play();
    }
</script>

<div class="z-2">
    <button on:click={handleClick} class="flex gap-1 bg-red-300 active:bg-red-400 text-white font-bold py-2 px-3 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
        Play audio
    </button>
    <audio bind:this={audioRef}></audio>
</div>
