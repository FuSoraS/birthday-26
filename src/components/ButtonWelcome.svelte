<script>
    import '@styles/button-welcome.css';
    import { NAME } from 'astro:env/client';

    export let src = '';

    let audioPlayed = false;
    let audioRef;

    const audioSrc = "/audios/ado-elf-off-vocal.opus";
    const audioVolume = 0.3;

    $: if (audioRef) {
        audioRef.src = audioSrc;
        audioRef.volume = audioVolume;
    }

    function handleClick() {
        if (!audioPlayed) {
            audioRef.play();
            audioPlayed = true;
        }
    }
</script>

<div>
    <a href={src} on:click={handleClick} class="text-inherit no-underline">
        <slot />
        <main>
            <h1>Bienvenida <span class="relative inline-block px-4 py-2 drop-shadow-[0_0_12px_rgba(0,255,157,0.4),0_0_20px_rgba(0,255,157,0.2)]"><span class="absolute inset-0 bg-[#00FF9D] rounded-2xl rotate-356"></span><span class="relative text-white text-shadow-lg">{NAME}</span></span></h1>
            <p class="mt-2">CLICK EN CUALQUIER PARTE PARA CONTINUAR</p>
        </main>
    </a>
    <audio bind:this={audioRef} loop></audio>
</div>
