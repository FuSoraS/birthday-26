<script>
    let audioRef;

    const audioSrc = "/audios/kasane-teto-happy-birthday-1.ogg";
    const audioVolume = 0.5;

    $: if (audioRef) {
        audioRef.src = audioSrc;
        audioRef.volume = audioVolume;
    }

    function handleClick() {
        audioRef.play();
    }
</script>

<div class="z-2">
    <button on:click={handleClick} class="bg-red-300 active:bg-red-400 text-white font-bold py-2 px-4 rounded-full">
        Play audio
    </button>
    <audio bind:this={audioRef}></audio>
</div>
