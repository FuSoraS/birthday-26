import { useRef, useState, useEffect } from 'react';

export function PlayTetoBirthday() {
    const [countclicks, setCountClicks] = useState(0);

    const audioRef = useRef();

    const audioSrc = "/kasane-teto-happy-birthday-1.ogg";
    const audioVolume = 0.4;
    
    useEffect(() => {
        audioRef.current.src = audioSrc;
        audioRef.current.volume = audioVolume;
    }, []);

    const handleClick = () => {
        setCountClicks(countclicks + 1);
        console.log(countclicks);
        audioRef.current.play();
    }

    return (
        <div>
            <button onClick={handleClick} className='bg-red-300 active:bg-red-400 text-white font-bold py-2 px-4 rounded-full mt-4'>
                Play audio
            </button>
            <audio ref={audioRef} />
        </div>
    )
}