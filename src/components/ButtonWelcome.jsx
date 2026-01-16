import { useRef, useState, useEffect } from 'react';
import '@styles/button-welcome.css';
import { NAME } from 'astro:env/client';

export function ButtonWelcome({ src = '', children = null}) {
    const [countclicks, setCountClicks] = useState(0);

    const audioRef = useRef();

    const audioSrc = "/elf-off-vocal-short.ogg";
    const audioVolume = 0.3;
    
    useEffect(() => {
        audioRef.current.src = audioSrc;
        audioRef.current.volume = audioVolume;
    }, []);

    const handleClick = () => {
        setCountClicks(countclicks + 1);
        console.log(countclicks);

        if (countclicks === 0) {
            audioRef.current.play();
        }

    }

    return (
        <div>
            <a href={src} onClick={handleClick} className='text-inherit no-underline'>
                {children}
                <main>
                    <h1>Bienvenida <span className='relative inline-block px-4 py-2 drop-shadow-[0_0_12px_rgba(0,255,157,0.4),0_0_20px_rgba(0,255,157,0.2)]'><span className='absolute inset-0 bg-[#00FF9D] rounded-2xl rotate-356'></span><span className='relative text-white text-shadow-lg'>{NAME}</span></span></h1>
                    <p className='mt-2'>CLICK EN CUALQUIER PARTE PARA CONTINUAR</p>
                </main>
            </a>
            <audio ref={audioRef} loop/>
        </div>
    )
}